import { Component, HostListener } from "@angular/core"
import { ModulesImportService } from "../../services/modules-import.service"
import { NavigationService } from "../../services/navigation.service"

// TODO: Возможно вынести состояние навигации в переменную
// export type navTypes = "drawer" | "rail" | "hidden"

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  // public state: navTypes = 'drawer'

  // Мониторинг ширины приложения
  // private windowWidth: any
  // @HostListener("window:resize", ["$event"])
  // resizeWindow() {
  //   this.windowWidth = window.innerWidth
  // }

  constructor(
    public modulesService: ModulesImportService,
    public navigationService: NavigationService
  ) {
    // this.resizeWindow()
  }
}
