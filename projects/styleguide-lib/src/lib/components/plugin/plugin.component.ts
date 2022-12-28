import { CommonModule } from "@angular/common"
import { Component, EventEmitter, OnInit, Output } from "@angular/core"

/**
 * Абстрактный суперкласс плагина
 *
 * @emits loaded - true при завершении инициализации компонента
 * @abstract childNgOnInit - метод для инициализации наследника
 */
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "lib-plugin",
  template: `<div>Plugin Works!</div>`,
})
export abstract class PluginComponent implements OnInit {
  /** Сигнал завершения инициализации компонента */
  @Output() loaded = new EventEmitter<boolean>()

  constructor() {}

  /**
   * Инициализатор Суперкласса Плагина вызывает инициализатор Наследника,
   * и отрабатывает сигнал о завершении инициализации
   */
  ngOnInit(): void {
    this.childNgOnInit()

    this.loaded.emit(true)
  }

  abstract childNgOnInit(): void
}
