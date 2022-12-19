import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { APP_ROUTES } from "./app.routes";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { PluginProxyComponent } from "./utils/plugins/plugin-proxy.component";
import { HttpClientModule } from "@angular/common/http";
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    PluginProxyComponent,
    HomeComponent,
    HttpClientModule,
  ],
  declarations: [AppComponent, NavigationComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
