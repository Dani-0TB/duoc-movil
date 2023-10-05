import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public usernameInput: String;
  public passwordInput: String;

  constructor(private router: Router) {
    this.usernameInput = '';
    this.passwordInput = '';
  }

  ngOnInit() {
    this.clearInputs();
  }

  loginUser() {
    let navigationExtras: NavigationExtras = {
      state: {user:this.usernameInput}
    }

    this.router.navigate(['home'], navigationExtras);
  }

  clearInputs() {
    this.usernameInput = '';
    this.passwordInput = '';
  }

}
