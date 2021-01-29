import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashScreenComponentPage } from './splash-screen-component.page';

const routes: Routes = [
  {
    path: '',
    component: SplashScreenComponentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashScreenComponentPageRoutingModule {}
