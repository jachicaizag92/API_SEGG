import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  onNavigate(){ 
    //this.router.navigateByUrl("https://www.google.com"); 
    //localStorage.setItem('token','token')
    let dat1=localStorage.getItem('token');
    let dat2=localStorage.getItem('refreshToken');
    window.location.href=`http://localhost:4200/login-token?token=${dat1}&refresh=${dat2}`; 
  }
}
