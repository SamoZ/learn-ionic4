import { Component, OnInit } from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  ToastController,
  LoadingController,
  ModalController,
  NavController
} from '@ionic/angular';

import { LoginComponent } from './../../modules/login/login.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

  constructor(
    public actionSheetController: ActionSheetController,
    public alertController: AlertController,
    public toastController: ToastController,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public navController: NavController
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.navController.back();
  }

  async showAction() {
    const actionSheet = await this.actionSheetController.create({
      header: '我是actionSheet标题',
      buttons: [
        {
          text: '删除',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete Clicked')
          }
        },
        {
          text: '分享',
          icon: 'share',
          handler: () => {
            console.log('Share Clicked')
          }
        },
        {
          text: '收藏',
          icon: 'heart',
          handler: () => {
            console.log('Heart Clicked')
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('Cancel Clicked')
          }
        }
      ]
    })
    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: '这是一个 alert 消息',
      buttons: ['Ok']
    })
    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: '这是一个 alert 消息',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    })
    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: ', blah);
          }
        },
        {
          text: '确认',
          handler: (e) => {
            console.log('Confirm Ok: ', e);
          }
        }
      ]
    })
    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'placeholder 2'
        },
        {
          name: 'name3',
          value: 'https://www.baidu.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-12-31'
        },
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: ', blah);
          }
        },
        {
          text: '确认',
          handler: (e) => {
            console.log('Confirm Ok: ', e);
          }
        }
      ]
    })
    await alert.present();
  }

  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Radio!',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radio 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'value2',
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'value3',
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'value4',
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'value5',
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6',
          value: 'value6',
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: ', blah);
          }
        },
        {
          text: '确认',
          handler: (e) => {
            console.log('Confirm Ok: ', e);
          }
        }
      ]
    })
    await alert.present();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: 'Checkbox!',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'value1',
          checked: true
        },
        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'value2',
        },
        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'value3',
        },
        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'value4',
        },
        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'value5',
        },
        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
          value: 'value6',
        },
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: ', blah);
          }
        },
        {
          text: '确认',
          handler: (e) => {
            console.log('Confirm Ok: ', e);
          }
        }
      ]
    })
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: '你的设置已经保存',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: '收藏',
          handler: () => {
            console.log('clicked');
          }
        },
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('cancel');
          }
        }
      ]
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'hellooo',
      duration: 2000
    });
    await loading.present();
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: 'lines',
      duration: 5000,
      message: '请等待',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }

  async doPress() {
    const alert = await this.alertController.create({
      backdropDismiss: false, // 解决空白，自定义弹框消失
      header: '提示',
      message: '确定要删除吗?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel ', blah);
          }
        },
        {
          text: '确定',
          handler: (v) => {
            console.log('clicked ', v);
          }
        }
      ]
    })
    await alert.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      showBackdrop: true,
      component: LoginComponent,
      componentProps: { aid: 123 }
    })
    await modal.present();

    // login组件销毁后
    const { data } = await modal.onDidDismiss();
    console.log(data);
  }
}
