import { PluginOptions } from "./plugin"

/**
 * Типы состояния плагина:
 *  not rendered - плагин еще не загружен;
 *  rendered - плагин загружен на интерфейсе;
 *  error - ошибка загрузки плагина;
 */
export type PluginState = "not rendered" | "rendered" | "error"

/**
 * Расширенный тип свойств плагина, содержащий стайлклассы и флаг окончания рендеринга
 */
export type Plugin = PluginOptions & {
  styleClass: string
  state: PluginState
}

/**
 * Класс для работы со списком плагинов на конкретной странице
 * Плагины в списке Уникальны по `Plugin.ID`
 * @method add Добавляет `Plugin` в список
 * @method getPluginInd Геттер индекса плагина в списке по `ID`
 * @method getPlugin Геттер плагина `Plugin` по `ID`
 * @method allPlugins Геттер всего списка плагинов `Plugin[]`
 * @method setState Устанавливает значение `state` по `ID`
 * @method isAllRendered Геттер состояния загруженности Всех плагинов
 */
export class Plugins {
  /**
   * Конструктор можно использовать как в пустом виде, так и передать в него плагины
   * @param _plugins ? Список плагинов
   */
  constructor(private _plugins: Plugin[] = []) {}

  /**
   * Добавляет в список плагинов новый плагин.
   * Если плагин уже существует в списке по `ID`, обновляет его значение
   * @param plugin Плагин типа `Plugin`
   */
  public add(plugin: Plugin) {
    const ind = this.getPluginInd(plugin.id)
    if (ind) {
      this._plugins[ind] = plugin
      return
    }
    this._plugins.push(plugin)
  }

  /**
   * @param pluginID `ID` Плагина
   * @returns Индекс плагина в списке или `undefined`, если плагина в списке нет
   */
  public getPluginInd(pluginID: string): number | undefined {
    const ind = this._plugins.findIndex((p) => p.id === pluginID)
    if (ind !== -1) {
      return ind
    }
    return undefined
  }

  /**
   * @param pluginID `ID` Плагина
   * @returns `Plugin` из списка или `undefined`, если плагина в списке нет
   */
  public getPlugin(pluginID: string): Plugin | undefined {
    const ind = this.getPluginInd(pluginID)

    if (ind) {
      return this._plugins[ind]
    }

    return undefined
  }

  /** Возвращает все плагины в списке */
  public get allPlugins(): Plugin[] {
    return this._plugins
  }

  /**
   *
   * @param pluginID `ID` Плагина
   * @param rendered default: "rendered", флаг состояния плагина
   * @returns `ID` Плагина, если он найден в списке, иначе `undefined`
   */
  public setState(
    pluginID: string,
    state: PluginState | undefined = "rendered"
  ): string | undefined {
    const ind = this.getPluginInd(pluginID)
    if (ind !== undefined) {
      this._plugins[ind].state = state
      return pluginID
    }

    return undefined
  }

  /**
   * Геттер для определения, загружены плагины или нет
   * @returns `true`, если все плагины в состоянии `"rendered"` или `"error"`, `false` иначе
   */
  public get isAllRendered(): boolean {
    return (
      this._plugins.filter((p) => p.state === "rendered" || p.state === "error")
        .length === this._plugins.length
    )
  }
}
