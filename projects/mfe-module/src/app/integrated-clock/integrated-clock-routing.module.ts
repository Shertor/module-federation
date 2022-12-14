import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IntegratedClockComponent } from "./integrated-clock.component";

const routes: Routes = [{ path: "", component: IntegratedClockComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntegratedClockRoutingModule {
  constructor () {}
}
