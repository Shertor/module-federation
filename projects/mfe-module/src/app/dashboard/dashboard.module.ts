import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ViewDashboardComponent } from './components/view-dashboard/view-dashboard.component';
import { ViewLoaderComponent } from './components/view-loader/view-loader.component';
import { PluginProxyComponent } from './utils/plugins/plugin-proxy.component';
import { HttpClientModule } from '@angular/common/http';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { NotificationComponent } from './components/notification/notification.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ViewDashboardComponent,
    ViewLoaderComponent,
    PageLoaderComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PluginProxyComponent,
    HttpClientModule
  ]
})
export class DashboardModule { }
