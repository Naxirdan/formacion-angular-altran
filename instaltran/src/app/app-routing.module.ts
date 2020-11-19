import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionModule } from './section/section.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./section/section.module').then(m => SectionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
