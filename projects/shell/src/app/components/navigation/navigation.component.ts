import { Component } from "@angular/core";
import { ModulesImportService } from "../../services/modules-import.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"],
})
export class NavigationComponent {
  constructor(public modulesService: ModulesImportService) {}
}
