import { CommonModule } from "@angular/common"
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from "@angular/core"

/**
 * Состояния кнопки:
 *  toOpen - Кнопка должна что-то открыть, сигнал `opened`
 *  toClose - Кнопка должна что-то закрыть, сигнал `closed`
 */
export type btnMenuStates = "toOpen" | "toClose"

/**
 * Кнопка в виде меню для открытия и закрытия компонентов
 * Имеет два стостояния `btnMenuStates`
 * Выводит два события `opened` и `closed` для нажатия по кнопке
 *  для каждого состояния
 * Начальное состояние кнопки можно задать через `[state]`
 * Также через него можно изменять состояние кнопки извне
 */
@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "lib-btn-menu",
  templateUrl: "./btn-menu.component.html",
  styleUrls: ["./btn-menu.component.scss"],
})
export class BtnMenuComponent {
  @Output() opened = new EventEmitter<btnMenuStates>()
  @Output() closed = new EventEmitter<btnMenuStates>()

  @Input("state") state: btnMenuStates = "toOpen"

  constructor() {}

  /**
   * Позволяет отслеживать внешенее измнение параметра `state`
   */
  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = []
    for (const propName in changes) {
      const changedProp = changes[propName]
      const to = JSON.stringify(changedProp.currentValue)
      // console.log(to)
    }
  }

  /**
   * Клик по кнопки с состоянием `toOpen`
   * Меняет текущее состояние и дает сигнал `opened`
   */
  public onBtnOpen(): void {
    this.state = "toClose"
    this.opened.emit(this.state)
  }

  /**
   * Клик по кнопки с состоянием `toClose`
   * Меняет текущее состояние и дает сигнал `closed`
   */
  public onBtnClose(): void {
    this.state = "toOpen"
    this.closed.emit(this.state)
  }
}
