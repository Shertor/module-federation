import { Component, OnInit } from "@angular/core"
import { Subject, takeUntil } from "rxjs"
import { LayoutService } from "../../services/layout.service"
import { LoaderService } from "../../services/loader.service"
import { PluginOptions } from "../../utils/plugins/plugin"

@Component({
  selector: "app-view-dashboard",
  templateUrl: "./view-dashboard.component.html",
  styleUrls: ["./view-dashboard.component.scss"],
})
export class ViewDashboardComponent implements OnInit {
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
  constructor(
    public layoutService: LayoutService,
    public pluginsService: LoaderService
  ) {}

  /**
   * Инициализатор подписывается на сабжект загрузки плагинов.
   */
  async ngOnInit(): Promise<void> {
    this.pluginsService.messages$.next('Загрузка сетки...')
    await this.layoutService.update()
    this.pluginsService.messages$.next('Загрузка плагинов...')
    await this.pluginsService.update()

    // Запрос плагинов с сервиса будет осуществляться только когда загрузка будет завершена.
    this.pluginsService.loadingManifest$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(this.getPlugins.bind(this))
  }

  /**
   * Запрашивает плагины с сервиса загрузки плагинов
   * @param loading
   */
  private getPlugins(loading: boolean): void {
    if (loading) return
    this.pluginsService.messages$.next('Загрузка плагинов...')

    this.plugins = this.pluginsService.getPlugins()
  }

  /**
   * Обрабатывает событие рендеринга плагина
   * @param pluginName plugin unicDisplayName
   */
  public onPluginRendered(pluginName: string) {
    this.pluginsService.setPluginRendered(pluginName)
  }

  /**
   * Деструктор удаляет все подписки
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }
}
