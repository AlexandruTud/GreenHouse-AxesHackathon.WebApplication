import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ]),

  ]
})
export class LoginComponent {

  showRegistration = false;

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit() {

  }

  login() {
    if (!this.showRegistration) {
      const email = (<HTMLInputElement>document.querySelector("#loginEmail")).value;
      const password = (<HTMLInputElement>document.querySelector("#loginPassword")).value;

      const payload = {
        emailAdress: email,
        userPassword: password
      };

      this.authService.login(payload).subscribe({
        next: (response) => {
          window.localStorage['userId'] = response;
          this.router.navigate(["/main/myelectronics"]);
        }
      });
    }
    else {
      const email = (<HTMLInputElement>document.querySelector("#registerEmail")).value;
      const password = (<HTMLInputElement>document.querySelector("#registerPassword")).value;

      const payload = {
        emailAdress: email,
        userPassword: password
      };

      this.authService.register(payload).subscribe({
        next: (response) => {
          window.localStorage['userId'] = response;
          this.router.navigate(["/main/myelectronics"]);
        }
      });
    }
  }

  toggleRegistration() {
    this.showRegistration = !this.showRegistration;
  }
}

