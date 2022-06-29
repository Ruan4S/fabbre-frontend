import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbreviacaoGuard } from '@app/@shared/guards/abreviacao.guard';
import { AbreviacaoComponent } from './abreviacao-component/abreviacao.component';

const routes: Routes = [
  { path: '', component: AbreviacaoComponent, canActivate: [AbreviacaoGuard], data: { title: 'Abreviação' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbreviacaoRoutingModule {}
