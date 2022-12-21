import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

/**
 * Сервис для работы с событиями навигации и передчи их в другие компоненты
 */
@Injectable({
  providedIn: "root",
})
export class NavigationService {
  /** Видимость навигации в мобильной версии (навигация скрывается при ширине менее 599px) */
  isVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  // ОТКРЫТИЕ ЗАКРЫТИЕ НАВИГАЦИИ
  /** Геттер для сабжекта `isVisible$` */
  public get visible(): boolean {
    return this.isVisible$.getValue()
  }
  /** Меняет состояние `isVisible$` на true*/
  open(): void {
    this.isVisible$.next(true)
  }
  /** Меняет состояние `isVisible$` на false*/
  close(): void {
    this.isVisible$.next(false)
  }
  /** Toggle для состояния `isVisible$` */
  toggle(): void {
    this.isVisible$.next(!this.isVisible$.getValue())
  }
}
