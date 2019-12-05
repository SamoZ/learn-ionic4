import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NewsPage } from './news.page';
import { NewsPageRoutingModule } from './news-routing.module';
import { ListModule } from './../../modules/list/list.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListModule,
    NewsPageRoutingModule
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
