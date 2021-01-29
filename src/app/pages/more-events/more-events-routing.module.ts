import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreEventsPage } from './more-events.page';

const routes: Routes = [
  {
    path: '',
    component: MoreEventsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreEventsPageRoutingModule {}
