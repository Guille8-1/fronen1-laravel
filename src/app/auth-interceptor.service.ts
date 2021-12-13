import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let token = localStorage.getItem("token")
   let tokenizeReq = req.clone({
     setHeaders:{
       //'Content-Type': 'application/json',
       'Authorization': 'Bearer '+ token
     }
   })
   return next.handle(tokenizeReq).pipe(tap(()=>{},
   (error:any) => {
     if(error instanceof HttpErrorResponse){
       if(error.status !== 401){
         return;
       }
     }
     localStorage.removeItem("token")
     this.router.navigate(["auth/login"])
   }
   ))
 }
  }

 
  // let token = localStorage.getItem("token");

