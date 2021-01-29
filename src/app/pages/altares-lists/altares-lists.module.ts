import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltaresListsPageRoutingModule } from './altares-lists-routing.module';

import { AltaresListsPage } from './altares-lists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltaresListsPageRoutingModule
  ],
  declarations: [AltaresListsPage]
})
export class AltaresListsPageModule {}
