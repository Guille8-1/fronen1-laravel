import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(protected router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    try{
      let token = localStorage.getItem("token");

      if(token){
        const base64Url = token.split(".")[1];
        let { exp } = JSON.parse(atob(base64Url))
        const expired = Date.now() >= exp * 1000
        if(expired){
          alert("Token has gone!")
          this.logout()
          return false;
        }
        return true;
      }else{
        this.router.navigate(["/auth/login"]);
        return false;
      }
      
    }catch{
      this.logout
      return false;
    }
  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigate(["/auth/login"]);
      return false;
  }
}
