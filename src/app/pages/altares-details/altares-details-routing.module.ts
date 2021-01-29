import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaresDetailsPage } from './altares-details.page';

const routes: Routes = [
  {
    path: '',
    component: AltaresDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltaresDetailsPageRoutingModule {}
