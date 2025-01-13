import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { MessagingService } from './messaging.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"poc-pwa-31acb","appId":"1:634161302115:web:a1089a88b653e6b4e38656","storageBucket":"poc-pwa-31acb.firebasestorage.app","apiKey":"censored","authDomain":"poc-pwa-31acb.firebaseapp.com","messagingSenderId":"634161302115","measurementId":"G-JNZVK5L02T"})),
    provideMessaging(() => getMessaging()),
    MessagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
