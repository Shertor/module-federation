import { Component, OnInit, ViewChild } from "@angular/core"
import { Subject, takeUntil } from "rxjs"

import { NavigationComponent } from "./components/navigation/navigation.component"
import { TopbarComponent } from "./components/topbar/topbar.component"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  /**
   * Сабжект, позволяющий при помощи pipe(takeUntil(this.ngUnsubscribe))
   *  затем отписаться от всех подписок
   */
  private ngUnsubscribe = new Subject<void>()

  /** Необходим для отслеживания событий Topbar и передачи их в другие компоненты */
  // @ViewChild(TopbarComponent)
  // private topbarComponent!: TopbarComponent

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }
}
