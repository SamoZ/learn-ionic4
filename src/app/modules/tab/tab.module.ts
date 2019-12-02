import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { TabComponent } from './tab.component';


@NgModule({
  declarations: [TabComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [TabComponent]
})
export class TabModule { }
