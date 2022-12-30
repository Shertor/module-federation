import { Component } from "@angular/core"
import { LayoutService } from "./services/layout.service"
import { LoaderService } from "./services/loader.service"

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  constructor(
    private _layoutService: LayoutService,
    private _loaderService: LoaderService
  ) {}
}
