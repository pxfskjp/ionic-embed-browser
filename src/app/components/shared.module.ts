import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AgmCoreModule } from '@agm/core';

import {HomeComponentPage} from './home-component/home-component.page';
import {DonateComponentPage} from './donate-component/donate-component.page';
import {SplashScreenComponentPage} from './splash-screen-component/splash-screen-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule.forRoot({ apiKey: '' })
  ],
  declarations: [
    HomeComponentPage,
    DonateComponentPage,
    SplashScreenComponentPage
  ],
  exports: [
    HomeComponentPage,
    DonateComponentPage,
    SplashScreenComponentPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
