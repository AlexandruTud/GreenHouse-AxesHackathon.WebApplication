import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { NavigationEnd, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router) {

  }
  goToPartners() {
    this.router.navigate(['/main/partners']);
  }

  goToElectronics() {
    this.router.navigate(['/main/myelectronics']);
  }

  goToOffers() {
    this.router.navigate(['/main/offers']);
  }

  goToChallenges() {
    this.router.navigate(['/main/challenges']);
  }

  signOut() {
    localStorage.removeItem('userId');
    this.router.navigate(['/auth/login']);
  }
}
