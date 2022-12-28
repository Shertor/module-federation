import { Component, OnInit } from "@angular/core"
import { BehaviorSubject, Subject, takeUntil } from "rxjs"
import { LoaderService } from "../../services/loader.service"

/** Типы состояний лоадера */
export type ViewLoaderStates = "show" | "hide"

@Component({
  selector: "app-view-loader",
  templateUrl: "./view-loader.component.html",
  styleUrls: ["./view-loader.component.scss"],
})
export class ViewLoaderComponent implements OnInit {
  /**
   * Сабжект, позволяющий при помощи pipe(takeUntil(this.ngUnsubscribe))
   *  затем отписаться от всех подписок
   */
  private ngUnsubscribe = new Subject<void>()

  public state: ViewLoaderStates = "hide"

  public loadingMessage: BehaviorSubject<string> = new BehaviorSubject(
    "Загрузка..."
  )

  constructor(public loaderService: LoaderService) {}

  ngOnInit(): void {
    // this.loaderService.renderedPlugins$
    //   .pipe(takeUntil(this.ngUnsubscribe))
    //   .subscribe(() => {
    //     console.log(this.loaderService.getPluginsCount())

    //     setTimeout(() => {
    //       this.loadingMessage.next(
    //         `Загрузка плагинов ${
    //           this.loaderService.renderedPlugins
    //         } из ${this.loaderService.getPluginsCount()}`
    //       )
    //     }, 0)
    //   })

    this.loaderService.renderingPlugins$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((renderingPlugins) => {
        if (!renderingPlugins) {
          this.state = "hide"
          return
        }
        if (renderingPlugins) {
          this.state = "show"
          return
        }
      })

    this.loaderService.messages$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((message: string) => {
        this.loadingMessage.next(message)
      })
  }

  /**
   * Деструктор удаляет все подписки
   */
  ngOnDestroy() {
    this.ngUnsubscribe.next()
    this.ngUnsubscribe.complete()
  }
}
