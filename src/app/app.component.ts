import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';


import firebase from 'firebase';
import { AuthService } from '../services/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;
  // tabsPage = TabsPage;
  settingsPage = SettingsPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private menuCtrl: MenuController,
  private authService: AuthService) {
    firebase.initializeApp({
      apiKey: "AIzaSyDfY69hHkunHwb62MPrpRluhO3D5ZLvhrY",
      authDomain: "my-first-project-5cdc5.firebaseapp.com"
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
        this.rootPage = TabsPage;
        // this.nav.setRoot(this.tabsPage);
      } else {
        this.isAuthenticated = false;
        this.rootPage = SigninPage;
        // this.nav.setRoot(this.signinPage);
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
  }
}
