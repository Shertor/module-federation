import { Component, OnInit } from "@angular/core"
import { BusEvent, EventBusService, EventType } from "shared"
import { Subject, takeUntil } from "rxjs"

@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.scss"],
})
export class NotificationComponent implements OnInit {
  /**
   * Сабжект, позволяющий при помощи pipe(takeUntil(this.ngUnsubscribe))
   *  затем отписаться от всех подписок
   */
  private _ngUnsubscribe = new Subject<void>()

  private _showTimeoutId: NodeJS.Timeout | undefined

  private _hideTimeoutId: NodeJS.Timeout | undefined

  public state: "show" | "hide" = "hide"

  public message: string = "tset messaage"

  private _baseShowDelay: number = 500 //ms

  constructor(private _eventBusService: EventBusService) {}

  ngOnInit(): void {
    this._eventBusService
      .on(EventType.ALL)
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe(this.onBusEvent.bind(this))
  }

  /** Функция срабатывающая с таймаутом на событие из шины */
  private onBusEvent(event: BusEvent) {
    let showDelay: number = this._baseShowDelay

    if (this._showTimeoutId) {
      clearTimeout(this._showTimeoutId)

      if (this.state === "show") {
        showDelay = 0
        clearTimeout(this._hideTimeoutId)
      }
    }

    this._showTimeoutId = setTimeout(() => {
      this.message = `${event.sender} : ${event.payload}`

      this.state = "show"

      this._hideTimeoutId = setTimeout(() => {
        this.state = "hide"
        showDelay = this._baseShowDelay
      }, 3000)
    }, showDelay)
  }

  /**
   * Деструктор удаляет все подписки
   */
  ngOnDestroy() {
    this._ngUnsubscribe.next()
    this._ngUnsubscribe.complete()
  }
}
