import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Calendar1Page } from './calendar1.page';

const routes: Routes = [
  {
    path: '',
    component: Calendar1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Calendar1PageRoutingModule {}
