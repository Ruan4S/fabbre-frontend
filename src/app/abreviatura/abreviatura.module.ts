import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { AbreviaturaComponent } from './abreviatura-component/abreviatura.component';
import { AbreviaturaRoutingModule } from './abreviatura-routing.module';

@NgModule({
  declarations: [AbreviaturaComponent],
  imports: [CommonModule, AbreviaturaRoutingModule, SharedModule, FlexLayoutModule, MaterialModule],
})
export class AbreviaturaModule {}
