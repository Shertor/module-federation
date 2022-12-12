import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

/**
 * Это пример сервиса, в котором периодически обновляются данные,
 * и на них подписаны сторонние модули.
 * Проектировать часы таким образом некорректно !!!
 */
@Injectable({
  providedIn: "root",
})
export class DatetimeService {
  public now: BehaviorSubject<Date> = new BehaviorSubject(new Date());

  constructor() {
    setInterval(() => {
      this.now.next(new Date());
    }, 1);
  }
}
