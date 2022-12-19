import { Component, OnInit } from "@angular/core";
import { MfeShellExampleService } from "@shared";
import { ModulesImportService } from "./services/modules-import.service";
import { CustomRemoteConfig } from "./utils/config";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "shell";

  remotes: CustomRemoteConfig[] = [];

  constructor(
    public mfeService: MfeShellExampleService,
    public modulesService: ModulesImportService
  ) {}

  async ngOnInit(): Promise<void> {
    console.log("app init");

    this.remotes = this.modulesService.remotes;
  }
}
