import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@app/@shared';
import { MaterialModule } from '@app/material.module';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, RouterModule, SharedModule],
  declarations: [ShellComponent],
})
export class ShellModule {}
