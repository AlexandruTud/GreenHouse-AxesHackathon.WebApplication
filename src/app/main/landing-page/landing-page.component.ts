import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']

})
export class LandingPageComponent {
  constructor(private router: Router) {

  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  goToHome() {
    this.router.navigate(['/main/myelectronics']);
  }
}
