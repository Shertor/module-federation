import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ViewDashboardComponent } from './components/view-dashboard/view-dashboard.component';
import { ViewLoaderComponent } from './components/view-loader/view-loader.component';
import { PluginProxyComponent } from './utils/plugins/plugin-proxy.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DashboardComponent,
    ViewDashboardComponent,
    ViewLoaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PluginProxyComponent,
    HttpClientModule
  ]
})
export class DashboardModule { }
