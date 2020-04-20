import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;
import {AgmCoreModule} from '@agm/core';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { GeoService } from './services/geo.service';
import { GoogleMapComponent } from './components/google-map/google-map.component';

import { TimePipe } from './pipes/time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    TimePipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    })
  ],
  providers: [GeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
