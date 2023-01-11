import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { BusEvent, EventBusService } from "shared"
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject"
import { Plugin, PluginState } from "../../utils/plugins/plugins"

@Component({
  selector: "app-view-dashboard",
  templateUrl: "./view-dashboard.component.html",
  styleUrls: ["./view-dashboard.component.scss"],
})
export class ViewDashboardComponent implements OnInit {
  baseMessage: [string, PluginState] = ["", "not rendered"]

  /** Плагины текущей страницы */
  public plugins: Plugin[] = []
  /** Событие окончания инициализации плагина */
  private _pluginsStates$: BehaviorSubject<[string, PluginState]> =
    new BehaviorSubject(this.baseMessage)
  public pluginStateChanged$ = this._pluginsStates$.asObservable()

  /** Состояния дашборда, влияют на класс в html/css */
  public state: "show" | "hide" = "show"

  constructor(private _eventBusService: EventBusService) {}

  async ngOnInit(): Promise<void> {}

  /**
   * Добавляет все плагины на дашборд
   * @param plugins Список плагинов в виде `Plugin[]`
   */
  public addPlugins(plugins: Plugin[]) {
    this.plugins = plugins
  }

  /**
   * Обрабатывает событие рендеринга плагина
   * @param pluginName plugin id
   */
  public onPluginRendered(pluginName: string) {
    this._pluginsStates$.next([pluginName, "rendered"])
  }

  /** Перехватывает событие для шины, заполняет поле `sender`
   * @param event Событие для передачи в шину без поля `sender`
   * @param sender ID плагина
   */
  public toBusEvent(event: BusEvent, sender: string) {
    this._eventBusService.next({ sender: sender, ...event })
  }
}
