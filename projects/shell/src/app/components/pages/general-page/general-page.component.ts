import { Component, OnInit } from "@angular/core"
import { Subject, takeUntil } from "rxjs"
import { PluginsImportService } from "../../../services/plugins-import.service"
import { PluginOptions } from "../../../utils/plugins/plugin"

/**
 * Компонент страницы ГЛАВНАЯ. подгружает и размещает на себе ВСЕ плагины
 */
@Component({
  selector: "app-general-page",
  templateUrl: "./general-page.component.html",
  styleUrls: ["./general-page.component.scss"],
})
export class GeneralPageComponent implements OnInit {
  /**
   * Сабжект, позволяющий при помощи pipe(takeUntil(this.ngUnsubscribe))
   *  затем отписаться от всех подписок
   */
  private ngUnsubscribe = new Subject<void>()
  /** Плагины текущей страницы */
  public plugins: PluginOptions[] = []

  /**
   * Конструктор инжектирует сервис плагинов
   * @param pluginsService
   */
  constructor(public pluginsService: PluginsImportService) {}

  /**
   * Инициализатор подписывается на сабжект загрузки плагинов.
   */
  ngOnInit(): void {
    // Запрос плагинов с сервиса будет осуществляться только когда загрузка будет завершена.
    this.pluginsService.loading$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(this.getPlugins.bind(this))
  }

  /**
   * Заправшиват плагины с сервиса загрузки плагинов
   * @param loading
   */
  private getPlugins(loading: boolean): void {
    if (loading) return

    this.plugins = this.pluginsService.getPlugins()
  }

  /**
   * Деструктор удаляет все подписки
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }
}
