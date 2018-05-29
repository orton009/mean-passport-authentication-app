import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http' ;
import { Subject, pipe } from 'rxjs';
// operators all come from `rxjs/operators`
import { map, takeUntil, tap } from 'rxjs/operators';

import {tokenNotExpired} from 'angular2-jwt' ;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  authToken :any ;
  user:any ;
  constructor(private http: Http ,
 ) {
   }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type' , 'application/json');
    return this.http.post("http://localhost:3000/users/authenticate" , user , {headers : headers})
    .pipe(map(data => data.json()))
  
  };

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization' , this.authToken);
    headers.append('Content-Type' , 'application/json');
    return this.http.get("http://localhost:3000/users/profile" , {headers : headers})
    .pipe(map(data => data.json()))
  
  }

  loadToken(){
    const token = localStorage.getItem("id_token");
    this.authToken = token ;
  }

  storeUserData(token , user){
    //saving token to local storage
    localStorage.setItem('id_token' , token);
    localStorage.setItem('user' , JSON.stringify(user));
    this.authToken = token ;
    this.user = user ;
  }
  
  logout(){
    this.authToken = null ;
    this.user = null ;
    localStorage.clear() ;
  }
  isLoggedIn(){
   return tokenNotExpired('id_token')  ;
  }
  
}
