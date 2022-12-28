import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { LookupService } from "../utils/plugins/lookup.service"
import { PluginOptions } from "../utils/plugins/plugin"

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  /** Флаг состояния загрузки плагинов */
  public loadingManifest$: BehaviorSubject<boolean> = new BehaviorSubject(false)
  /** Список всех плагинов из манифеста*/
  private plugins: PluginOptions[] = []
  /** Флаг состояния процесса рендеринга плагинов */
  public renderingPlugins$: BehaviorSubject<boolean> = new BehaviorSubject(true)
  /** Количество отрендеренных плагинов */
  public renderedPlugins$: BehaviorSubject<number> = new BehaviorSubject(0)
  /** Количество отрендеренных плагинов */
  public messages$: BehaviorSubject<string> = new BehaviorSubject("Загрузка...")

  constructor(private lookupService: LookupService) {}

  /**
   * Очистка значений сабжектов
   */
  private clear(): void {
    this.loadingManifest$.next(false)
    this.renderingPlugins$.next(true)
    this.renderedPlugins$.next(0)
  }

  // ЗАГРУЗКА МАНИФЕСТА
  /** Функция для загрузки манифеста */
  private async loadManifest(): Promise<void> {
    if (this.loading) return

    this.loadingManifest$.next(true)
    this.messages$.next('Загрузка манифеста...')
    this.lookupService.lookup().then((plugins) => {
      setTimeout(() => {
        this.plugins = plugins
        this.loadingManifest$.next(false)
      }, 0)
    }).catch((error)=>{
      this.messages$.next(error)
    })
  }

  /** Функция для обновления манифеста */
  public async update(): Promise<void> {
    this.clear()

    await this.loadManifest()
  }

  /** Геттер для флага состояния загрузки плагинов*/
  public get loading(): boolean {
    return this.loadingManifest$.getValue()
  }

  /**
   * Возвращает список всех плагинов, или список плагинов для выбранной страницы
   * @param page Номер страницы, на которой необходимо расположить плагин
   * @returns Список плагинов
   */
  public getPlugins(page?: number | undefined): PluginOptions[] {
    if (page) {
      return this.plugins.filter((p) => (p.page ? p.page === page : false))
    }

    return this.plugins
  }

  /**
   * Возвращает список число плагинов на странице
   * @param page Номер страницы, на которой необходимо расположить плагин
   * @returns Число плагинов
   */
  public getPluginsCount(page?: number | undefined): number {
    if (page) {
      return this.plugins.filter((p) => (p.page ? p.page === page : false))
        .length
    }

    return this.plugins.length
  }

  // РЕНДЕРИНГ ПЛАГИНОВ
  /** Геттер количества отрендеренных плагинов */
  public get renderedPlugins(): number {
    return this.renderedPlugins$.getValue()
  }
  /** Геттер состояния рендеринга плагинов */
  public get renderingPlugins(): boolean {
    return this.renderingPlugins$.getValue()
  }

  /**
   * Увеличивает количество загруженных плагинов, если плагин `name` есть в манифесте
   * @param name plugin unicDisplayName
   */
  public setPluginRendered(name: string) {
    // console.log(name, this.renderedPlugins, this.plugins.length);
    if (this.plugins.filter((p) => p.unicDisplayName === name).length > 0) {
      this.renderedPlugins$.next(this.renderedPlugins + 1)

      if (this.renderedPlugins + 1 === this.plugins.length) {
        this.messages$.next('Все плагины загружены!')

        this.renderingPlugins$.next(false)
        return
      }
    }
  }
}
