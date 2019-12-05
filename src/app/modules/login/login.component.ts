import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Input() aid: any;

  constructor(public navParams: NavParams, public modalController: ModalController) {
    console.log(navParams.get('aid'));
  }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss({
      result: 'login销毁了'
    })
  }

}
