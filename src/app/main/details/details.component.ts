import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  electronicId: Number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.electronicId = params['electronicId'];
      this.getDetails();
    });

  }

  goToOffers() {
    this.router.navigate(['/main/offers']);
  }

  getDetails() {
    this.authService.getElectronics(this.electronicId).subscribe({
      next: (response) => {
        console.log(response);
      }
    })
  }
}
