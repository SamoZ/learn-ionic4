import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  public list: any = [];

  constructor(public nav: NavController) { }

  ngOnInit() {
    for (let i = 0; i <= 10; i++) {
      this.list.push(`这是第${i}条数据`);
    }
  }

  goBack() {
    this.nav.navigateBack('/tabs/tab3');
  }

  favorite() { }

  share() { }

  unread() { }

}
