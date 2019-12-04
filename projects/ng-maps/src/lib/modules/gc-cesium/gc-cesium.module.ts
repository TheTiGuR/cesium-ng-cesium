import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularCesiumModule, AngularCesiumWidgetsModule } from 'angular-cesium';

import { GcMapComponent } from './gc-map/gc-map.component';
import { GcToolbarComponent } from './gc-toolbar/gc-toolbar.component';

@NgModule({
  declarations: [GcMapComponent, GcToolbarComponent],
  imports: [CommonModule, AngularCesiumModule.forRoot(), AngularCesiumWidgetsModule],
  exports: [GcMapComponent, GcToolbarComponent]
})
export class GcCesiumModule {}
