import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { LookupService } from "../utils/plugins/lookup.service"
import { PluginOptions } from "../utils/plugins/plugin"

/**
 * Сервис для загрузки манифеста Плагинов
 */
@Injectable({
  providedIn: "root",
})
export class LoaderService {
  /** Флаг состояния загрузки плагинов */
  public loadingManifest$: BehaviorSubject<boolean> = new BehaviorSubject(false)
  /** Список всех плагинов из манифеста*/
  private _plugins: PluginOptions[] = []

  constructor(private lookupService: LookupService) {}

  /**
   * Очистка значений сабжектов
   */
  private clear(): void {
    this.loadingManifest$.next(false)
  }

  // ЗАГРУЗКА МАНИФЕСТА
  /** Функция для загрузки манифеста */
  private async loadManifest(): Promise<void> {
    if (this.loading) return

    this.loadingManifest$.next(true)
    await this.lookupService.lookup().then((plugins) => {
      this._plugins = plugins
      this.loadingManifest$.next(false)
    })
  }

  /** Функция для обновления манифеста */
  public async update(): Promise<void> {
    this.clear()

    await this.loadManifest()
  }

  /** Геттер для флага состояния загрузки плагинов*/
  private get loading(): boolean {
    return this.loadingManifest$.getValue()
  }

  /**
   * Возвращает список всех плагинов, или список плагинов для выбранной страницы
   * @param pageID Номер страницы, на которой необходимо расположить плагин
   * @returns Список плагинов
   */
  public getPlugins(pageID?: number | undefined): PluginOptions[] {
    if (pageID) {
      return this._plugins.filter((p) =>
        p.pageID ? p.pageID === pageID : false
      )
    }

    return this._plugins
  }

  /**
   * Возвращает плагин в виде `PluginOptions` если он найден в манифесте
   * @param id `PluginID`
   * @returns `PluginOptions` если плагин найден, `undefined` иначе
   */
  public getPlugin(id: string): PluginOptions | undefined {
    const plugin = this._plugins.find((p) => p.id === id)
    return plugin
  }
}
