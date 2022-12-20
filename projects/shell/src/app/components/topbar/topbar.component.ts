import { Component } from "@angular/core"
import { BehaviorSubject } from "rxjs"
import { NavigationService } from "../../services/navigation.service"

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent {
  constructor(private navigationService: NavigationService) {}

  public openMenu(): void {
    this.navigationService.open()
  }
}
