import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { RedirectsService } from '../services/redirects.service';



@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {

  constructor( private authSrv: AuthService, private redirect:RedirectsService ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authSrv.dataLogged.pipe(
      map( user => {
        if(user){
          this.redirect.goToDashboard()
          return false
        }else{
          return true
        }
      })
    )
  }
  
}
