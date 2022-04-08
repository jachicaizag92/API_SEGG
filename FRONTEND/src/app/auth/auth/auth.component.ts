import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from "../services/login.service";
import { ResponseUsiarioI,UserI } from "../interfaces/user";
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


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


  constructor(private fb:FormBuilder, private loginservice:LoginService, private router:Router ) {
    // localStorage.setItem('token','token')
  }


  
/**
 * 
 */
  loginSubmit(){
    const {email, password} =this.loginFormulario.value
    this.loginservice.login(email,password).subscribe(data => {
      console.log(data);
      if(data.msg === true){
        this.onNavigate()
        localStorage.clear();
      }else{
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'Usuario o contraseña incorrecta',
          footer: '<a href="https://ruah.unicesmag.edu.co/recuperarclave">Olvido su contraseña?</a>',
        })
      }
    })
  }

  onNavigate(){ 
    let dat1=localStorage.getItem('token');
    let dat2=localStorage.getItem('refreshToken');
    window.location.href=`http://localhost:4200/login-token?token=${dat1}&refresh=${dat2}`; 
    return true
  }


  ngOnInit(): void {

  }





}

