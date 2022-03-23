import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from "../services/login.service";
import { ResponseUsiarioI,UserI } from "../interfaces/user";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  loginFormulario:FormGroup = this.fb.group({
    email:['jachg2420',[Validators.required]],
    password:['Pruebas@Unicesmag', [Validators.required, Validators.minLength(6)]]
  })


  constructor(private fb:FormBuilder, private loginservice:LoginService) {
    localStorage.setItem('token','token')
  }

  loginSubmit(){
    // console.log(this.loginFormulario.value);
    const {email, password} =this.loginFormulario.value
    this.loginservice.login(email,password).subscribe()
  

  }



  ngOnInit(): void {

  
  }

}
