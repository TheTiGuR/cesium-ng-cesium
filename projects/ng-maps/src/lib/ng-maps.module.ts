import { NgModule } from '@angular/core';
import { NgMapsComponent } from './ng-maps.component';
import { GcCesiumModule } from './modules/gc-cesium/gc-cesium.module';
import { AngularCesiumModule, AngularCesiumWidgetsModule } from 'angular-cesium';

@NgModule({
  declarations: [NgMapsComponent],
  imports: [AngularCesiumModule.forRoot(), AngularCesiumWidgetsModule, GcCesiumModule],
  exports: [NgMapsComponent]
})
export class NgMapsModule {}
