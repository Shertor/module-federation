import { Routes } from "@angular/router";
import { GeneralPageComponent } from "./components/pages/general-page/general-page.component";
// import { loadRemoteModule } from "@angular-architects/module-federation";

export const APP_ROUTES: Routes = [
  {
    path: "",
    component: GeneralPageComponent,
    pathMatch: "full",
  },
  // {
  //   path: "flights",
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: "manifest",
  //       remoteName: "mfe1",
  //       exposedModule: "./Module",
  //     }).then((m) => m.FlightsModule),
  // },
  // {
  //   path: "bookings",
  //   loadChildren: () =>
  //     loadRemoteModule({
  //       type: "manifest",
  //       remoteName: "mfe2",
  //       exposedModule: "./Module",
  //     }).then((m) => m.BookingsModule),
  // },
];
