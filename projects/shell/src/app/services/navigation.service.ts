import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  isVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  public get visible(): boolean {
    return this.isVisible$.getValue()
  }

  open(): void {
    this.isVisible$.next(true)
  }

  close(): void {
    this.isVisible$.next(false)
  }

  toggle(): void {
    this.isVisible$.next(!this.isVisible$.getValue())
  }
}
