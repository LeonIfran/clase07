import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class VerificadorService implements CanActivate {
  canActivate(
    route: import("@angular/router").ActivatedRouteSnapshot,
    state: import("@angular/router").RouterStateSnapshot
  ):
    | boolean
    | import("@angular/router").UrlTree
    | import("rxjs").Observable<boolean | import("@angular/router").UrlTree>
    | Promise<boolean | import("@angular/router").UrlTree> {
    const myRawToken = localStorage.getItem("user");
    const decodedToken = this.helper.decodeToken(myRawToken);
    const expirationDate = this.helper.getTokenExpirationDate(myRawToken);
    const isExpired = this.helper.isTokenExpired(myRawToken);
    console.log(isExpired);

    return isExpired;
  }

  constructor(private helper: JwtHelperService) {}
}
