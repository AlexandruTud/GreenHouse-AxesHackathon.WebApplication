import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MyelectronicsComponent } from './myelectronics/myelectronics.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PartnersComponent } from './partners/partners.component';
import { OffersComponent } from './offers/offers.component';
import { DetailsComponent } from './details/details.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CardComponent } from './card/card.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { ChallengesComponent } from './challenges/challenges.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { BecomepartenerComponent } from './becomepartener/becomepartener.component';
import { OfferComponent } from './offer/offer.component';



@NgModule({
  declarations: [
    MyelectronicsComponent,
    LandingPageComponent,
    PartnersComponent,
    OffersComponent,
    DetailsComponent,
    AddproductComponent,
    CardComponent,
    ChallengesComponent,
    BecomepartenerComponent,
    OfferComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NzCardModule,
    NzModalModule,
    NzButtonModule,
    NzIconModule,
    NzAvatarModule,
    CanvasJSAngularChartsModule

  ]
})
export class MainModule { }
