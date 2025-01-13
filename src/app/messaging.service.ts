import { Injectable } from '@angular/core';
import { getToken, Messaging, onMessage } from '@angular/fire/messaging';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  message$: Observable<any>;

  constructor(private msg: Messaging){
        console.log("Messaging Service");
        Notification.requestPermission().then(
        (notificationPermissions: NotificationPermission) => {
          if (notificationPermissions === "granted") {
            console.log("Granted");
          }
          if (notificationPermissions === "denied") {
            console.log("Denied");
          }
        });
        console.log("Registering Service Worker");
        navigator.serviceWorker
          .register("/assets/firebase-messaging-sw.js", {
            type: "module",
          })
          .then((serviceWorkerRegistration) => {
            getToken(this.msg, {
              serviceWorkerRegistration: serviceWorkerRegistration,
            }).then((x) => {
              console.log('my fcm token', x);
              // This is a good place to then store it on your database for each user
            });
        });  

      this.message$ = new Observable((sub) => onMessage(this.msg, (msg) =>     
        sub.next(msg))).pipe(
        tap((msg) => {
          console.log("My Firebase Cloud Message", msg);
        })
      );
    }

  public receiveMessage() {
      return this.message$;
    }

}

