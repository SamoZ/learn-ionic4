import { Component } from '@angular/core';

import { users, Users } from './../../assets/mock/data';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  length = 0;
  data: Users[] = [];

  constructor() { }

  ngOnInit(): void {
    this.initData(20);
  }

  initData(name) {
    const originalLength = this.length;
    for (let i = 0; i < name; i++) {
      this.data.push(users[i + originalLength]);
      this.length++;
    }
  }

  doRefresh(event) {
    setTimeout(() => {
      this.initData(0);
      event.target.complete();
    }, 2000);
  }

  loadData(event) {
    setTimeout(() => {
      this.initData(10);
      console.log('Done');
      event.target.complete();
      if (this.data.length === users.length) {
        event.target.disabled = true;
      };
    }, 500);
  }

}
