import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

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

  constructor(private router : Router,
    private hardcodedAuth : HardcodedAuthService) { }

  handleLogin() {
    if(this.hardcodedAuth.authenticate(this.username, this.password)) {
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
