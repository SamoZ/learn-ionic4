import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppMinimize } from '@ionic-native/app-minimize/ngx';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  backButtonPressed = false; // 用于判断返回键是否触发
  customBackActionSubscription: Subscription;
  url: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private appMinimize: AppMinimize,
    private toastController: ToastController
  ) {
    this.initializeApp();
    this.initRouterListen();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(true);
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.registerBackButtonAction();
    });
  }

  initRouterListen() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
        console.log(this.url);
      }
    })
  }

  registerBackButtonAction() {
    this.customBackActionSubscription = this.platform.backButton.subscribe(() => {
      if (this.url === '/tabs/tab1'
        || this.url === '/tabs/tab2'
        || this.url === '/tabs/tab3'
        || this.url === '/tabs/tab4'
      ) {
        console.log(this.backButtonPressed);
        if (this.backButtonPressed) {
          navigator['app'].exitApp(); // 杀死 app
          // this.appMinimize.minimize(); // 程序最小化
          this.backButtonPressed = false;
        } else {
          this.miniApp();
          this.backButtonPressed = true;
          setTimeout(() => {
            this.backButtonPressed = false;
          }, 2000);
        }
      }
    })
  }

  async miniApp() {
    const toast = await this.toastController.create({
      message: '再按一次退出应用',
      duration: 1000
    })
    toast.present();
  }
}
