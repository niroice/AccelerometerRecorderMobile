import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';
import { Network } from '@ionic-native/network';
import {Injectable} from '@angular/core';

import { AccelerationLogbookService } from "../service/accelerationlogbook.service";
import { AlertController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NetworkPage } from '../pages/network/network';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { LogPage } from '../pages/log/log';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NetworkPage,
    SettingsPage,
    TabsPage,
    LogPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NetworkPage,
    SettingsPage,
    TabsPage,
    LogPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeviceMotion,
    AccelerationLogbookService,
    AlertController,
    Network,
      
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
