import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { UserI, ResponseUsiarioI } from "../interfaces/user";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl:String = environment.baseUrl
  private _usuario!:UserI

  get usuario(){
    return {...this._usuario} //-- desestrucuturado para evitar maniuplar el _usuario
  }

  constructor(private http:HttpClient) { }

  login(email:string, password:string):Observable<any>{
    // email = 'dfarteaga@unicesmag.edu.co'
    // password = 'Pruebas@Unicesmag'

    // const url= 'api/auth/login';
    const url = 'http://localhost:3400/api/login/usr'

    const body = {email,password};

    return this.http.post<any>(url,body)
  

    
    
  }
}
