import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "integrated-clock",
    loadChildren: () =>
      import("./integrated-clock/integrated-clock.module").then(
        (m) => m.IntegratedClockModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
