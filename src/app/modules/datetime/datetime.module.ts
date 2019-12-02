import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatetimeComponent } from './datetime.component';


@NgModule({
  declarations: [DatetimeComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [DatetimeComponent]
})
export class DatetimeModule { }
