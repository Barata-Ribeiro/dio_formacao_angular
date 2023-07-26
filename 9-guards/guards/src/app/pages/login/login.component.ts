import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private service: LoginService) {}

  logIn() {
    this.service.fromLogin();
  }

  logOut() {
    this.service.fromLogOut();
  }
}
