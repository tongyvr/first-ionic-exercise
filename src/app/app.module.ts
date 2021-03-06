import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AttendingPage } from '../pages/attending/attending';
import { EventsPage } from '../pages/events/events';
import { EventPage } from '../pages/event/event';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { EventsService } from "../services/events";
import { SettingsService } from "../services/settings";
import { AuthService } from '../services/auth';
import { NewPage } from '../pages/new/new';
import { FormPage } from '../pages/form/form';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { EventOptionsPage } from '../pages/attending/event-options/event-options';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDfY69hHkunHwb62MPrpRluhO3D5ZLvhrY",
  authDomain: "my-first-project-5cdc5.firebaseapp.com",
  databaseURL: "https://my-first-project-5cdc5.firebaseio.com",
  storageBucket: "my-first-project-5cdc5.appspot.com",
  messagingSenderId: '326880771473'
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    EventsPage,
    EventPage,
    SettingsPage,
    AttendingPage,
    NewPage,
    FormPage,
    SigninPage,
    SignupPage,
    EventOptionsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    EventsPage,
    EventPage,
    SettingsPage,
    AttendingPage,
    NewPage,
    FormPage,
    SigninPage,
    SignupPage,
    EventOptionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventsService,
    SettingsService,
    AuthService
  ]
})
export class AppModule {}
