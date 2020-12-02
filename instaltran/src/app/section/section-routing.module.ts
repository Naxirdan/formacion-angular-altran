import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesEnum } from '../core/enum/routes.enum';
import { AuthguardGuard } from '../core/security/auth/authguard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: RoutesEnum.LOGIN,
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    // canActivateChild: [AuthguardGuard],
    children: [
      {
        path: RoutesEnum.HOME,
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: RoutesEnum.PROFILE,
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
