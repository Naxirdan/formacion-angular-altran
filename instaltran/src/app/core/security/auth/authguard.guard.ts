import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutesEnum } from '../../enum/routes.enum';
import { AuthServiceTsService } from '../../services/auth.service.ts.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate, CanActivateChild {

  constructor(private router: Router, private _authService: AuthServiceTsService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url = state.url
    return this.checkUrl(url)
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.canActivate(route, state)
  }

  private checkUrl(url: string): boolean {
    if (RoutesEnum.LOGIN !== url) {
      if(this._authService.isLogged)
      {
        this.router.navigate([RoutesEnum.LOGIN])
        return false
      }
    }
    return true
  }

}
