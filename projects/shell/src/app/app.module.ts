import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { APP_ROUTES } from "./app.routes";
import { AppComponent } from "./app.component";
import { PluginProxyComponent } from "./utils/plugins/plugin-proxy.component";
import { HttpClientModule } from "@angular/common/http";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TopbarComponent } from "./components/topbar/topbar.component";
import { MainComponent } from "./components/main/main.component";
import { GeneralPageComponent } from "./components/pages/general-page/general-page.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    PluginProxyComponent,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    TopbarComponent,
    MainComponent,
    GeneralPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
