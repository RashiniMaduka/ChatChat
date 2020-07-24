import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDplFJ5t0e-zuCHPqwTv7RvY6qhs7PlmKs",
    authDomain: "chatchat-39cfc.firebaseapp.com",
    databaseURL: "https://chatchat-39cfc.firebaseio.com",
    projectId: "chatchat-39cfc",
    storageBucket: "chatchat-39cfc.appspot.com",
    messagingSenderId: "697847627598",
    appId: "1:697847627598:web:60c9100c636dd532e2681f",
    measurementId: "G-3QPB01TPVX"
  };

export default function firebaseInit(){
    firebase.initializeApp(firebaseConfig);
}