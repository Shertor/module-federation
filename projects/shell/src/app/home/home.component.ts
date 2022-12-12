import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MfeShellExampleService } from "@shared";
import { LookupService } from "../utils/plugins/lookup.service";
import { PluginOptions } from "../utils/plugins/plugin";
import { PluginProxyComponent } from "../utils/plugins/plugin-proxy.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: true,
  imports: [PluginProxyComponent, CommonModule],
})
export class HomeComponent implements OnInit {
  public plugins: PluginOptions[] = [];
  public isPluginsLoading: boolean = true;

  constructor(
    public mfeService: MfeShellExampleService,
    private lookupService: LookupService
  ) {}

  ngOnInit(): void {
    this.isPluginsLoading = true;
    this.lookupService.lookup().then((plugins) => {
      this.isPluginsLoading = false;

      this.plugins = plugins;
    });
  }

  onChangeMfeValueBtnPressed() {
    let current = this.mfeService.getValue().getValue();
    this.mfeService.changeValue(current + 1);
  }
}
