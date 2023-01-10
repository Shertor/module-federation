import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import {
  BusEvent,
  EventBusService,
  EventType,
  MfeShellExampleService,
} from "@shared"
import { PluginComponent } from "@styleguide"
import { BehaviorSubject } from "rxjs"

/**
 * Standalone компонент, подключаемый в виде плагина в основное приложение
 * Для экспорта необходимо добавить его в `webpack.config.js`
 */
@Component({
  standalone: true,
  selector: "app-plugin1",
  templateUrl: "./plugin1.component.html",
  styleUrls: ["./plugin1.component.scss"],
  imports: [CommonModule],
})
export class Plugin1Component extends PluginComponent implements OnInit {
  /** Некоторое тестовое значение как пример изменения состояния компонента */
  private someValue$: BehaviorSubject<number> = new BehaviorSubject(0)
  /** */
  private _busValue: number = 0

  constructor(
    public sharedService: MfeShellExampleService,
    private _eventBusService: EventBusService
  ) {
    super()
  }

  childNgOnInit(): void {
    // throw new Error("Method not implemented.")
    const event: BusEvent = {
      type: EventType.EVENT_1,
      payload: `Hallo from Plugin`,
    }
    this._eventBusService.next(event)
  }

  /**
   * Добавляет к `someValue` единицу
   */
  public changeSomeValue(): void {
    this.someValue$.next(this.someValue$.getValue() + 1)
  }

  /**
   * Возвращает значение `someValue`
   */
  public get getSomeValue(): number {
    return this.someValue$.getValue()
  }

  /**
   * Изменяет значение переменной в общем сервисе
   */
  public onSharedServiceValueBtnPressed() {
    let current = this.sharedService.getValue().getValue()
    this.sharedService.changeValue(current + 1)
  }

  /**
   *
   */
  public onEmitEvent() {
    this._busValue += 1
    const event: BusEvent = { type: EventType.EVENT_2, payload: this._busValue }
    this._eventBusService.next(event)
  }
}
