import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreEventsPageRoutingModule } from './more-events-routing.module';

import { MoreEventsPage } from './more-events.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreEventsPageRoutingModule
  ],
  declarations: [MoreEventsPage]
})
export class MoreEventsPageModule {}
