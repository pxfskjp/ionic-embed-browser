import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashScreenComponentPageRoutingModule } from './splash-screen-component-routing.module';

import { SplashScreenComponentPage } from './splash-screen-component.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashScreenComponentPageRoutingModule
  ],
  declarations: [SplashScreenComponentPage]
})
export class SplashScreenComponentPageModule {}
