import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDT4jhgdX5E7KNg-iqyWnNnQ3bSCjnNKrM",
  authDomain: "atoi-bd924.firebaseapp.com",
  databaseURL: "https://atoi-bd924.firebaseio.com",
  projectId: "atoi-bd924",
  storageBucket: "atoi-bd924.appspot.com",
  messagingSenderId: "1035551086215",
  appId: "1:1035551086215:web:133782bee039512d864a22",
  measurementId: "G-SJJJVQ4LMY",
};

firebase.initializeApp(config);

const firestore = new firebase.firestore();

export { firestore };
