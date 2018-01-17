import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyB8C4u9jX75ab0SlV7pSPUy_NzTPbXt6U8",
    authDomain: "weather-app-1514564464900.firebaseapp.com",
    databaseURL: "https://weather-app-1514564464900.firebaseio.com",
    projectId: "weather-app-1514564464900",
    storageBucket: "weather-app-1514564464900.appspot.com",
    messagingSenderId: "145788125675"
  };
  var fire = firebase.initializeApp(config);
  export default fire;