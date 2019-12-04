import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularCesiumModule } from 'angular-cesium';

import { NgMapsModule } from 'ng-maps';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [AngularCesiumModule.forRoot(), BrowserModule, AppRoutingModule, NgMapsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
