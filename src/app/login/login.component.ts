import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'ck'
  password = ''
  errorMessage = 'Invalid Username/Password'
  invalidLogin = false

  constructor(private router : Router) { }

  handleLogin() {
    if(this.username==='ck' && this.password=='pass') {
      this.invalidLogin=false
      this.router.navigate(['welcome/', this.username])
    }
    else {
      this.invalidLogin=true
    }
  }

  ngOnInit(): void {
  }

}
