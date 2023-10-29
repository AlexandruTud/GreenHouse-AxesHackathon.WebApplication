import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyelectronicsComponent } from './myelectronics/myelectronics.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PartnersComponent } from './partners/partners.component';
import { OffersComponent } from './offers/offers.component';
import { DetailsComponent } from './details/details.component';
import { ChallengesComponent } from './challenges/challenges.component';

const routes: Routes = [
  {path: 'myelectronics', component: MyelectronicsComponent, pathMatch: 'full'},
  {path: '', redirectTo: 'landing-page', pathMatch: 'full'},
  {path: 'landing-page', component: LandingPageComponent, pathMatch: 'full'},
  {path: 'partners', component: PartnersComponent, pathMatch: 'full'},
  {path: 'offers', component: OffersComponent, pathMatch: 'full'},
  {path: 'details', component: DetailsComponent, pathMatch: 'full'},
  {path: 'challenges', component: ChallengesComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
