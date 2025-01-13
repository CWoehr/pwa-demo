# PocApa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Angular Fire

To connect FCM we are using the latest Version of AngularFire check https://github.com/angular/angularfire/blob/main/docs/messaging.md

## relevant Files

[Service Worker for Notifications](/src/assets/firebase-messaging-sw.js)
[Webservice to Process Notification Content when App is loaded](/src/app/messaging.service.ts)

## how to test

1. fill new Firebase Information in
[app.module.ts](/src/app/app.module.ts)
[Service Worker](/src/assets/firebase-messaging-sw.js)

2. run
```
ng build
ng serve
```

4. copy fcm token from console
```
my fcm token f8Xlr_Nho0ylT_GDNtE7ek:APA91bH5OvTthJo8-TKlpuYG3JgcqhiY_IyRbpwmuST2uzGlrIXYQaqIGy1j2wGM6dSzgMQIfkGWXLvOiCoERUKgQ0bW2Ego4S5zN9KavsyYC70YlmDM2iQ
```

6. send testmessage via 
https://console.firebase.google.com/project/{{your project id}}/notification/compose

7. check for
```
[firebase-messaging-sw.js] Received background message: 
```
in console.

9. If no Popup appears check Popup Settings on OS. (I wasted 4 hours because I forgot I disabled popups from all browsers.)
