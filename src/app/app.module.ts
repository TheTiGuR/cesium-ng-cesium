import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AngularCesiumModule } from "angular-cesium";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [AngularCesiumModule.forRoot(), BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
