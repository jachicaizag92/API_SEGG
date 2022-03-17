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
    email:['',[Validators.required]],
    password:['', [Validators.required, Validators.minLength(6)]]
  })


  constructor(private fb:FormBuilder, private loginservice:LoginService) {

  }

  loginSubmit(){
    console.log(this.loginFormulario.value);
    const {email, password} =this.loginFormulario.value
    this.loginservice.login(email,password).subscribe(data=>console.log(data))
  

  }



  ngOnInit(): void {

  
  }

}
