import { Component, OnInit } from "@angular/core";
import { PluginsImportService } from "../../../services/plugins-import.service";
import { PluginOptions } from "../../../utils/plugins/plugin";

@Component({
  selector: "app-general-page",
  templateUrl: "./general-page.component.html",
  styleUrls: ["./general-page.component.scss"],
})
export class GeneralPageComponent implements OnInit {
  public plugins: PluginOptions[] = [];

  constructor(public pluginsService: PluginsImportService) {
    pluginsService.loading$.subscribe(this.getPlugins.bind(this));
  }

  ngOnInit(): void {}

  private getPlugins(loading: boolean): void {
    if (loading) return;

    this.plugins = this.pluginsService.getPlugins();
  }
}
