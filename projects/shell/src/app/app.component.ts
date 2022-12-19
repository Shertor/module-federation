import { getManifest } from "@angular-architects/module-federation";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MfeShellExampleService } from "@shared";
import { ModulesImportService } from "./services/modules-import.service";
import { CustomManifest, CustomRemoteConfig } from "./utils/config";
import { buildRoutes } from "./utils/routes";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "shell";

  remotes: CustomRemoteConfig[] = [];

  constructor(
    private router: Router,
    public mfeService: MfeShellExampleService,
    public modulesService: ModulesImportService
  ) {}

  async ngOnInit(): Promise<void> {
    console.log('app init');
    
    this.remotes = this.modulesService.remotes
  }
}
