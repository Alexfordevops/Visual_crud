import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router){}

  navToLogin() {
    this.router.navigate(['/visualizations']); // Altere para a rota desejada
  }
  navToHome(){
    this.router.navigate(['/home']);
  }
  navToDevInfo(){
    this.router.navigate(['/devinfo']);
  }
}
