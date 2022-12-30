import { Component, OnInit } from "@angular/core"

/** Типы состояний лоадера */
export type ViewLoaderStates = "show" | "hide"

@Component({
  selector: "app-view-loader",
  templateUrl: "./view-loader.component.html",
  styleUrls: ["./view-loader.component.scss"],
})
export class ViewLoaderComponent {
  /** Состояние лоадера, 'show' - лоадер виден, 'hide' - лоадер не виден */
  public state: "show" | "hide" = "hide"
}
