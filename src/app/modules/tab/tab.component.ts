import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {
  tabs = 'pizza';

  constructor() { }

  ngOnInit() {}

  segmentChanged(e) {
    // console.log(e);
  }

}
