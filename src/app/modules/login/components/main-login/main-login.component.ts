import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss']
})
export class MainLoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private router: Router, private userService: LoginService) {}

  ngOnInit(): void {
    // Add the hardcoded user when the component initializes
    this.addHardcodedUser();
  }

  onLogin(): void {
    // Hardcoded credentials for demonstration purposes
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password';
    const registeredUsers = this.userService.getUsers();
    // Check if username and password match the hardcoded credentials
    const matchedUser = registeredUsers.find(user => user.username === this.username && user.password === this.password);
    if (matchedUser) {
      // Redirect to a different page (e.g., home page) upon successful login
      this.router.navigate(['/employee']);
    } else {
      // Display an error message for invalid credentials
      this.loginError = 'Invalid username or password. Please try again.';
    } 
  }
  
  toRegister(): void{
    this.router.navigate(['/register']);
  }

  private addHardcodedUser(): void {
    // Add the hardcoded user to the user service
    this.userService.addUser({
      username: 'admin',
      password: 'password',
      email: 'admin@example.com'
      // Add other properties as needed
    });
  }
}
