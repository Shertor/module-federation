import { CommonModule } from "@angular/common"
import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { BusEvent } from "../../services/event-bus.service"

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
  /** Сигнал для передачи в шину событий */
  @Output() toBusEvent = new EventEmitter<BusEvent>()

  constructor() {}

  /**
   * Инициализатор Суперкласса Плагина вызывает инициализатор Наследника,
   * и отрабатывает сигнал о завершении инициализации
   */
  ngOnInit(): void {
    this.childNgOnInit()

    setTimeout(() => {
      this.loaded.emit(true)
    }, 0)
  }

  abstract childNgOnInit(): void

  /**
   * Фунция эмитит события `BusEvent` для перехвата родителем
   * @param event Событие для передачи в шину (без поля `sender`)
   */
  public toBusService(event: BusEvent) {
    this.toBusEvent.emit(event)
  }
}
