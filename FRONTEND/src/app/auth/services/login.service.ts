import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(email:string, password:string){

    const url= ``;
    const body = {email,password};

    return this.http.post(url,body)
  }
}
