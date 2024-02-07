import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private router: Router, private userService: LoginService) {}

  onRegister(): void {
    // Add dummy data to the user service
    this.userService.addUser({
      username: this.username,
      password: this.password,
      email: this.email
    });

    // Redirect to the login page after registration
    this.router.navigate(['/login']);
  }
  backLogin(): void {

    // Redirect to the login page after registration
    this.router.navigate(['/login']);
  }
}
