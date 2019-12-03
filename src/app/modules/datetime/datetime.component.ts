import { Component, OnInit } from '@angular/core';

import sd from 'silly-datetime';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
})
export class DatetimeComponent implements OnInit {
  day = sd.format(new Date(), 'YYYY-MM-DD');
  year = sd.format(new Date(), 'YYYY');
  customPickerOptions = {
    buttons: [{
      text: '取消',
      handler: (e) => console.log('cancel: ', e)
    }, {
      text: '保存',
      handler: (e) => {
        console.log('ok: ', e);
        this.year = e.year.value;
      }
    }]
  };

  constructor() {
  }

  ngOnInit() { }

  datetimeChange() {
    console.log(sd.format(this.day, 'YYYY-MM-DD'));
  }

}
