import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { Plugin1Component } from "./plugin1/plugin1.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Plugin1Component],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
