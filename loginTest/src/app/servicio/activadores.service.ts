import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ActivadoresService implements CanActivate {
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
      //console.log("HOLAAA",state.url, route);
      if (localStorage.getItem('user')) {
        return true;
      }
      else {
        return false;
      }
  }

  constructor() { }
}
