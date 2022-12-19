import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LookupService } from "../utils/plugins/lookup.service";
import { PluginOptions } from "../utils/plugins/plugin";

/**
 * Сервис для загрузки и хранения манифеста с плагинами
 */
@Injectable({
  providedIn: "root",
})
export class PluginsImportService {
  /** Флаг состояния загрузки плагинов */
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  /** Список всех плагинов из манифеста*/
  private plugins: PluginOptions[] = [];

  constructor(private lookupService: LookupService) {
    this.loadManifest();
  }

  /** Функция для загрузки манифеста */
  private loadManifest(): void {
    if (this.loading) return;

    this.loading$.next(true);
    this.lookupService.lookup().then((plugins) => {
      this.loading$.next(false);
      this.plugins = plugins;
    });
  }

  /** Функция для обновления манифеста */
  public update(): void {
    this.loadManifest();
  }

  /** Геттер для флага состояния загрузки плагинов*/
  public get loading(): boolean {
    return this.loading$.getValue();
  }

  /**
   * Возвращает список всех плагинов, или список плагинов для выбранной страницы
   * @param page Номер страницы, на которой необходимо расположить плагин
   * @returns Список плагинов
   */
  public getPlugins(page?: number | undefined): PluginOptions[] {
    if (page) {
      return this.plugins.filter((p) => (p.page ? p.page === page : false));
    }

    return this.plugins;
  }
}