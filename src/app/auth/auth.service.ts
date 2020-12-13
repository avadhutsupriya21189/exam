import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  url = 'http://localhost:4000/user'

  constructor(
    private router : Router,
    private httpClient : HttpClient
  ) { }


  login(email : string, password :string){
    const body = {
      email: email,
    password: password
    }
   return this.httpClient.post(this.url + '/signin' , body)
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(sessionStorage['token']){
      //user is already logged in
      //lauched the component
      return true
    }

    //force user for login
    this.router.navigate(['/auth/login'])
    
    //user is not logged in yet
    //stop lauching the component
    return false
   }
  
}

