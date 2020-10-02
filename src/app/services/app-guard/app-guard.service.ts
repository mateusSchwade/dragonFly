import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppGuardService {

  constructor(
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    let login: any = window.localStorage.getItem('dwlounsa');

    try {
      login = JSON.parse(atob(login))

      if (!login.usulog && login.admin) {

        this.router.navigate(['login']);
        return false
      } else {
        return true
      };
    } catch (error) {
      this.router.navigate(['login']);
      return false
    }
  }
}

