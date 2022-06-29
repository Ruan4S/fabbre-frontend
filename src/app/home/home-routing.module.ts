import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { HomeComponent } from './home-component/home.component';

const routes: Routes = [Shell.childRoutes([{ path: '', component: HomeComponent, data: { title: 'Início' } }])];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
