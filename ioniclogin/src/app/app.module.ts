import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';

import { HttpModule } from '@angular/http';
import {PostProvider } from '../providers/post-provider';
//import {HttpClientModule} from '@angular/common/http';
//import {HttpProviderService} from '../providers/http/http-provider.service'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
     BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     HttpModule,
     //HttpClientModule,
     IonicStorageModule.forRoot()
    ],
     
  providers: [
    StatusBar,
    PostProvider,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
