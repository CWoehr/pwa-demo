// This sample application is using 9.22, make sure you are importing the same version

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getMessaging, onBackgroundMessage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-sw.js";

const firebaseConfig = {
    apiKey: "censored",
    authDomain: "poc-pwa-31acb.firebaseapp.com",
    projectId: "poc-pwa-31acb",
    storageBucket: "poc-pwa-31acb.firebasestorage.app",
    messagingSenderId: "634161302115",
    appId: "1:634161302115:web:a1089a88b653e6b4e38656",
    measurementId: "G-JNZVK5L02T"
  };

  self.addEventListener('push', (event) => {
    console.log('Push event received:', event);
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Default Title';
    const options = {
      body: data.body || 'Default body',
      icon: data.icon || '/path/to/default-icon.png',
    };
    event.waitUntil(self.registration.showNotification(title, options));
  });

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message:', payload);
  
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.icon,
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });