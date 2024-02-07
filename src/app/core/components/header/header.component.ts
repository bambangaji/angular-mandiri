import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  onLogout(){
    this.router.navigate(['/login']);
  }
  onHome(){
    this.router.navigate(['/employee/main']);
  }
}
