import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginFormulario:FormGroup = this.fb.group({
    email:['jachicaiza@outlook.com',[Validators.required, Validators.email]],
    password:['Pruebas@Unicesmag', [Validators.required, Validators.minLength(6)]]
  })


  constructor(private fb:FormBuilder) { }

  loginSubmit(){
    console.log(this.loginFormulario.value);
    const {email, password} =this.loginFormulario.value

  }

  ngOnInit(): void {
  }

}
