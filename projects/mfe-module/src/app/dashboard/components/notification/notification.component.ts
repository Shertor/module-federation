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

  private _timeoutId: NodeJS.Timeout | undefined

  public state: "show" | "hide" = "hide"

  public message: string = "tset messaage"

  constructor(private _eventBusService: EventBusService) {}

  ngOnInit(): void {
    this._eventBusService
      .on(EventType.ALL)
      .pipe(takeUntil(this._ngUnsubscribe))
      .subscribe(this.onBusEvent.bind(this))
  }

  /** Функция срабатывающая с таймаутом на событие из шины */
  private onBusEvent(event: BusEvent) {
    if (this._timeoutId) {
      clearTimeout(this._timeoutId)
    }

    this._timeoutId = setTimeout(() => {
      this.message = `${event.sender} : ${event.payload}`

      this.state = "show"

      setTimeout(() => {
        this.state = "hide"
      }, 3000)
    }, 500)
  }

  /**
   * Деструктор удаляет все подписки
   */
  ngOnDestroy() {
    this._ngUnsubscribe.next()
    this._ngUnsubscribe.complete()
  }
}
