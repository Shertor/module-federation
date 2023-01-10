import { Injectable } from "@angular/core"
import { filter, map, Observable, Subject } from "rxjs"

export const enum EventType {
  EVENT_1 = "event_1",
  EVENT_2 = "event_2",
  EVENT_3 = "event_3",
}

export interface BusEvent<T = any> {
  type: EventType
  payload: T
}

@Injectable({
  providedIn: "root",
})
export class EventBusService {
  private _eventSubject = new Subject<BusEvent>()

  /**
   * Subscribe to event
   * @param type - event type
   */
  public on<T = any>(type: EventType): Observable<T> {
    return this._eventSubject.pipe(
      filter((event) => event.type === type),
      map((event) => event.payload)
    )
  }

  /**
   * Push next event
   * @param event - event name
   */
  public next(event: BusEvent): void {
    this._eventSubject.next(event)
  }
}
