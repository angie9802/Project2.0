import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComunicacionApiPage } from './comunicacion-api.page';

const routes: Routes = [
  {
    path: '',
    component: ComunicacionApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComunicacionApiPageRoutingModule {}
