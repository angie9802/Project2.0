import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataFisioPage } from './data-fisio.page';

const routes: Routes = [
  {
    path: '',
    component: DataFisioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataFisioPageRoutingModule {}
