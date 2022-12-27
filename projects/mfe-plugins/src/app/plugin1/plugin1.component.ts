import { CommonModule } from "@angular/common"
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from "@angular/core"
import { MfeShellExampleService } from "@shared"
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
export class Plugin1Component implements OnInit {
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
