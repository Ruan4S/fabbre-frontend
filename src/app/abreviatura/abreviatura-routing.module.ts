import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbreviaturaGuard } from '@app/@shared/guards/abreviatura.guard';
import { AbreviaturaComponent } from './abreviatura-component/abreviatura.component';

const routes: Routes = [
  { path: '', component: AbreviaturaComponent, canActivate: [AbreviaturaGuard], data: { title: 'Abreviatura' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbreviaturaRoutingModule {}
