import { Component } from "@angular/core";
import { DatetimeService, MfeShellExampleService } from "@shared";

@Component({
  selector: "app-integrated-clock",
  templateUrl: "./integrated-clock.component.html",
  styleUrls: ["./integrated-clock.component.scss"],
})
export class IntegratedClockComponent {
  constructor(
    public datetimeService: DatetimeService,
    public mfeService: MfeShellExampleService
  ) {}

  onChangeMfeValueBtnPressed() {
    let current = this.mfeService.getValue().getValue();
    this.mfeService.changeValue(current + 1);
  }
}
