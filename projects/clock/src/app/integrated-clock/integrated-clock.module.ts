import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IntegratedClockRoutingModule } from "./integrated-clock-routing.module";
import { IntegratedClockComponent } from "./integrated-clock.component";
import { DateTimePipe } from "@shared";

@NgModule({
  declarations: [IntegratedClockComponent, DateTimePipe],
  imports: [CommonModule, IntegratedClockRoutingModule],
})
export class IntegratedClockModule {}
