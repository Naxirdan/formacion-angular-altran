import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
