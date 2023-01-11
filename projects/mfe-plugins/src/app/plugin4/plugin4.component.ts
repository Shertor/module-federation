import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import {
  BusEvent,
  EventType,
  MfeShellExampleService,
  PluginComponent,
} from "shared"
import { BehaviorSubject } from "rxjs"

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-plugin4",
  templateUrl: "./plugin4.component.html",
  styleUrls: ["./plugin4.component.scss"],
})
export class Plugin4Component extends PluginComponent implements OnInit {
  /** Некоторое тестовое значение как пример изменения состояния компонента */
  private someValue$: BehaviorSubject<number> = new BehaviorSubject(0)
  /** Некоторое значения для шины событий */
  private _busValue: number = 0

  constructor(public sharedService: MfeShellExampleService) {
    super()
  }

  childNgOnInit(): void {
    // throw new Error("Method not implemented.")
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
   * Эмитет событие в ШинуСобытий
   */
  public onEmitEvent() {
    this._busValue += 1
    const event: BusEvent = { type: EventType.EVENT_2, payload: this._busValue }

    this.toBusService(event)
  }
}
