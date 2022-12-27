import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { Plugin1Component } from "./plugin1/plugin1.component";
import { Plugin2Component } from './plugin2/plugin2.component';
import { Plugin3Component } from './plugin3/plugin3.component';
import { Plugin4Component } from './plugin4/plugin4.component';
import { Plugin5Component } from './plugin5/plugin5.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Plugin1Component, Plugin2Component, Plugin3Component, Plugin4Component, Plugin5Component],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
