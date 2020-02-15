import * as firebase from "firebase/app";
import "firebase/messaging";
const initializedFirebaseApp = firebase.initializeApp({
  // Project Settings => Add Firebase to your web app
  apiKey: "AIzaSyDjAmvTUFIhyOswt1cS1tPPC-0O1a5wwTI",
  authDomain: "reactnotification-6c386.firebaseapp.com",
  databaseURL: "https://reactnotification-6c386.firebaseio.com",
  projectId: "reactnotification-6c386",
  storageBucket: "reactnotification-6c386.appspot.com",
  messagingSenderId: "42922771102",
  appId: "1:42922771102:web:f5b80a0bfb6d389955318f",
  measurementId: "G-S0SD2CKJHQ"
});
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  "BLzdrC2dnrnwwQ5_z2Wo_kd9Uc3ELWHKoIw7x9EFO1yswPwXc3Six_4ozO-9xeHkRceyKLbLDbmxcT8EJboyk4I"
);
export { messaging };
