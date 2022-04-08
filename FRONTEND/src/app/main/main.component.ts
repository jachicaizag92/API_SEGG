import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { 
   

  }

  ngOnInit(): void {
    
   
    }
  }
  
  /**
   * onNavigate
   */
  // onNavigate(){ 
  //   let dat1=localStorage.getItem('token');
  //   let dat2=localStorage.getItem('refreshToken');
  //   window.location.href=`http://localhost:4200/login-token?token=${dat1}&refresh=${dat2}`; 
  //   return true
    
  // }

