import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { AbreviacaoComponent } from './abreviacao-component/abreviacao.component';
import { AbreviacaoRoutingModule } from './abreviacao-routing.module';

@NgModule({
  declarations: [AbreviacaoComponent],
  imports: [CommonModule, AbreviacaoRoutingModule, SharedModule, FlexLayoutModule, MaterialModule],
})
export class AbreviacaoModule {}
