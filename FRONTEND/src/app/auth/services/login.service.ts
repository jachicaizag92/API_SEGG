import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { UserI, ResponseUsiarioI } from "../interfaces/user";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl:String = environment.baseUrl
  private _usuario!:UserI

  get usuario(){
    return {...this._usuario} //-- desestrucuturado para evitar maniuplar el _usuario
  }

  constructor(private http:HttpClient, private router:Router) {

   }

  login(email:string, password:string):Observable<any>{
    // email = 'dfarteaga@unicesmag.edu.co'
    // password = 'Pruebas@Unicesmag'

    // const url= 'api/auth/login';
    const url = 'http://localhost:3400/api/login/usr'

    const body = {email,password};

    return this.http.post<any>(url,body)
      .pipe(
        tap(resp =>{
          if(resp !== ''){
            localStorage.setItem('token', resp.token)
            localStorage.setItem('refreshToken', resp.tokenRefresh)
          }
        })
      )
        this.validarToken()
      
    }  

    validarToken(){
      const url = 'http://localhost:3400/api/login/usr'
      const headers = new HttpHeaders()
        .set('x-token', localStorage.getItem('token') || '')

      return this.http.get(url, {headers})
    
  }

}
