import { AfterContentInit, Component, OnInit, ViewChild } from "@angular/core"
import { BehaviorSubject, Subject, takeUntil } from "rxjs"

import { BusEvent, EventBusService, EventType } from "@shared"

import { LayoutOptions, LayoutService } from "../../services/layout.service"
import { LoaderService } from "../../services/loader.service"

import { awaitChilds } from "../../utils/functions/awaitChilds"
import { PluginOptions } from "../../utils/plugins/plugin"
import { Plugins, PluginState } from "../../utils/plugins/plugins"

import { ViewDashboardComponent } from "../view-dashboard/view-dashboard.component"
import { ViewLoaderComponent } from "../view-loader/view-loader.component"

/**
 * Компонент загрузчика дашборда. Содержит в себе `ViewLoader` и `ViewDashboard`.
 * Дожидается их инициализации и подтягивает манифесты расположения (`LayoutService`)
 *  и свойств плагинов (`LoaderService`).
 * Сортирует плагины в соответствии с расположением и подтягивает нужные стайл классы из него.
 * Формирует экземпляр класса `Plugins` и заполняет его настроенными плагинами.
 * Отслеживает формирование плагинов через подписку на `ViewDashboardComponent::pluginStateChanged$`
 */
@Component({
  selector: "app-page-loader",
  templateUrl: "./page-loader.component.html",
  styleUrls: ["./page-loader.component.scss"],
})
export class PageLoaderComponent implements OnInit, AfterContentInit {
  /**
   * Сабжект, позволяющий при помощи pipe(takeUntil(this.ngUnsubscribe))
   *  затем отписаться от всех подписок
   */
  private _ngUnsubscribe = new Subject<void>()
  /** View Dashboard компонент */
  @ViewChild(ViewDashboardComponent)
  private _dashboard!: ViewDashboardComponent
  /** View Loader компонент*/
  @ViewChild(ViewLoaderComponent)
  private _viewLoader!: ViewLoaderComponent
  /** Сабжект состояния загрузки детей */
  private _childsLoaded$: BehaviorSubject<boolean> = new BehaviorSubject(false)
  /** Плагины текущей страницы */
  private _plugins: Plugins = new Plugins()
  /** Айди таймаута для подписки на событие из ШиныСобытий*/
  private _TimeoutBusEvent2: NodeJS.Timeout | undefined

  constructor(
    private _layoutService: LayoutService,
    private _loaderService: LoaderService,
    private _eventBusService: EventBusService
  ) {}

  /** Инициализатор подписывается на сабжект загрузки лоадера и дашборда */
  ngOnInit(): void {
    // Подписка на окончание загрузки чайлдов
    this._childsLoaded$
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe(this.onChildsLoaded.bind(this))

    // Пример подписки на одно из событий в ШинеСобытий
    this._eventBusService
      .on(EventType.EVENT_1)
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe((event) => {
        console.log(event)
      })

    // Пример подписки, срабатывающей с таймаутом
    this._eventBusService
      .on(EventType.EVENT_2)
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe(this.onBusEvent2.bind(this))
  }

  /** После завершения инициализации компонентов
   *  подписываемся на изменение состояния плагинов внутри дашборда
   */
  ngAfterContentInit(): void {
    awaitChilds(() => {
      this._childsLoaded$.next(true)

      this._dashboard.pluginStateChanged$
        .pipe(takeUntil(this._ngUnsubscribe))
        .subscribe(this.setPluginState.bind(this))
    })
  }

  /**
   * Осуществляет загрузку плагинов в соответствии с layout
   * @param isLoaded - значение передаваемое `_childsLoaded$`
   */
  private onChildsLoaded(isLoaded: boolean): void {
    // Если создание лоадера и дашборда еще не завершено, выходим
    if (!isLoaded) return

    // Начальное состояние лоадера - показать лоадер
    this._viewLoader.state = "show"
    // Начальное состояние дашборда - быть скрытым
    this._dashboard.state = "hide"

    // Обновляем расположение плагинов
    this._layoutService.update().then(() => {
      // Обновляем манифест плагинов
      this._loaderService.update().then(() => {
        // Запрашиваем расположение
        const layout: LayoutOptions[] = this._layoutService.Layout

        // В манифесте лэйаута плагинов они располагаются в нужном порядке,
        //  поэтому будем проходить по нему и заполнять `this.plugins: Plugins[]`
        for (const p of layout) {
          // Для плагина из лэйаута получаем его параметры `PluginOptions`
          const plugin: PluginOptions | undefined =
            this._loaderService.getPlugin(p.id)

          // Если такие параметры существуют, то добавляем плагин к списку плагинов текущей страницы
          if (plugin) {
            this._plugins.add({
              ...plugin,
              styleClass: p.styleClass,
              state: "not rendered", // по умолчанию плагин еще не загружен
            })
          }
        }
        // Завершается цикл добавлением плагинов во view dashboard
        this._dashboard.addPlugins(this._plugins.allPlugins)
      })
    })
  }

  /**
   * Отлавливает событие от дашборда и сообщает классу плагинов о состоянии плагина
   * Если
   * @param event [pluginID, PluginState]
   */
  public setPluginState(event: [string, PluginState]) {
    // Пустой ID плагина нам заранее не подходит
    if (event[0].length === 0) return

    // Изменяем состояние плагина и сразу проверяем, что нет ошибок
    if (this._plugins.setState(event[0], event[1]) === undefined) {
      throw new Error(
        "Плагин на сетке отсутствует в списке плагинов текущей страницы"
      )
    }

    // Переключаем состояния лоадера и дашборда
    if (this._plugins.isAllRendered) {
      this._viewLoader.state = "hide"
      this._dashboard.state = "show"
    }
  }

  /** Функция срабатывающая с таймаутом на событие из шины */
  private onBusEvent2(event: BusEvent) {
    if (this._TimeoutBusEvent2) {
      clearTimeout(this._TimeoutBusEvent2)
    }

    this._TimeoutBusEvent2 = setTimeout(() => {
      console.log(event)
    }, 1000)
  }

  /**
   * Деструктор удаляет все подписки
   */
  ngOnDestroy() {
    this._ngUnsubscribe.next()
    this._ngUnsubscribe.complete()
  }
}
