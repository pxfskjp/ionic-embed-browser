import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltaresDetailsPageRoutingModule } from './altares-details-routing.module';

import { AltaresDetailsPage } from './altares-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltaresDetailsPageRoutingModule
  ],
  declarations: [AltaresDetailsPage]
})
export class AltaresDetailsPageModule {}
