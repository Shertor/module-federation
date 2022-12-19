import { getManifest } from "@angular-architects/module-federation";
import { Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CustomManifest, CustomRemoteConfig } from "../utils/config";
import { buildRoutes } from "../utils/routes";

@Injectable({
  providedIn: "root",
})
export class ModulesImportService {
  public remotes: CustomRemoteConfig[] = [];

  constructor(private router: Router) {
    const manifest = getManifest<CustomManifest>();

    // Hint: Move this to an APP_INITIALIZER
    //  to avoid issues with deep linking
    const routes = buildRoutes(manifest);
    this.router.resetConfig(routes);

    this.remotes = Object.values(manifest);
  }
}
