import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Calendar1PageRoutingModule } from './calendar1-routing.module';
import { Calendar1Page } from './calendar1.page';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    Calendar1PageRoutingModule
  ],
  declarations: [Calendar1Page]
})
export class Calendar1PageModule {}
