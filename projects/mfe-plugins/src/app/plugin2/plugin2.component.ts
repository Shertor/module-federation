import { CommonModule } from "@angular/common"
import { Component, EventEmitter, Output } from "@angular/core"
import { MfeShellExampleService } from "@shared"
import { BehaviorSubject } from "rxjs"

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-plugin2",
  templateUrl: "./plugin2.component.html",
  styleUrls: ["./plugin2.component.scss"],
})
export class Plugin2Component {
  /** Некоторое тестовое значение как пример изменения состояния компонента */
  private someValue$: BehaviorSubject<number> = new BehaviorSubject(0)

  @Output() loaded = new EventEmitter<boolean>()

  constructor(public sharedService: MfeShellExampleService) {} // Конструктор инжектирует общий сервис как пример

  async ngOnInit() {
    this.loaded.emit(true)
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
  onSharedServiceValueBtnPressed() {
    let current = this.sharedService.getValue().getValue()
    this.sharedService.changeValue(current + 1)
  }
}
