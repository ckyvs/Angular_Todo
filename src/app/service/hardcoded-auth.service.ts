import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username, password) {
    if(username==='ck' && password=='pass') {
      sessionStorage.setItem('authenticated user', username)
      return true
    }
    else {
      return false
    }
  }

  isLoggedIn() {
    let user = sessionStorage.getItem('authenticated user')
    return !(user === null)
  }

  logout() {
      sessionStorage.removeItem('authenticated user')
  }
}
