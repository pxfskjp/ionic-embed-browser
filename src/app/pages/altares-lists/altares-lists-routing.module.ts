import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltaresListsPage } from './altares-lists.page';

const routes: Routes = [
  {
    path: '',
    component: AltaresListsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltaresListsPageRoutingModule {}
