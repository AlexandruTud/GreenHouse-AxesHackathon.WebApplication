import { Component } from '@angular/core';
import { AuthService } from 'src/app/_core/services/auth.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  offers: any[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit() {
    var userId = localStorage.getItem("userId");
    this.authService.getOffers(userId).subscribe({
      next: (response) => {
        for (let i = 0; i < 1000; i++) {
          if (response[i] == null) {
            break;
          }
          this.offers[i] = response[i];
        }
      }
    });
  }
}
