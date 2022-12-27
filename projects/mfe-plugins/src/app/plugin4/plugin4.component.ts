import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MfeShellExampleService } from '@shared';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-plugin4',
  templateUrl: './plugin4.component.html',
  styleUrls: ['./plugin4.component.scss']
})
export class Plugin4Component {
  /** Некоторое тестовое значение как пример изменения состояния компонента */
  private someValue$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(public sharedService: MfeShellExampleService) { } // Конструктор инжектирует общий сервис как пример

  ngOnInit() {
    console.log('Plugin Init');
  }

  /**
   * Добавляет к `someValue` единицу
   */
  public changeSomeValue(): void {
    this.someValue$.next(this.someValue$.getValue() + 1);
  }

  /**
   * Возвращает значение `someValue`
   */
  public get getSomeValue(): number {
    return this.someValue$.getValue();
  }

  /**
   * Изменяет значение переменной в общем сервисе
   */
  onSharedServiceValueBtnPressed() {
    let current = this.sharedService.getValue().getValue();
    this.sharedService.changeValue(current + 1);
  }
}
