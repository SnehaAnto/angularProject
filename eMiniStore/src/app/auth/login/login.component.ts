import { Component } from '@angular/core';
import { AuthService } from '../auth.service';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onLogin(){
    this.authService.login();
    this.router.navigate(['cart']);
  }
}
