// import { loadRemoteModule } from "@angular-architects/module-federation";
// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";
// import { HomeComponent } from "./home/home.component";

// const routes: Routes = [
//   { path: "", component: HomeComponent },
//   {
//     path: "clock",
//     loadChildren: () =>
//       loadRemoteModule({
//         type: "manifest",
//         remoteName: `clock`,
//         exposedModule: "./Module",
//       }).then((m) => m.IntegratedClockModule),
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}