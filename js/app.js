// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDa7tfgG2LG7-gdgWo318b7cyHaVdRxqOk",
    authDomain: "portfolio-e6a0d.firebaseapp.com",
    databaseURL: "https://portfolio-e6a0d-default-rtdb.firebaseio.com",
    projectId: "portfolio-e6a0d",
    storageBucket: "portfolio-e6a0d.appspot.com",
    messagingSenderId: "35800181580",
    appId: "1:35800181580:web:aacf2a792b6782e5963de9",
    measurementId: "G-M8MVQ7E8N2"
  };
  const app=firebase.initializeApp(firebaseConfig);
  console.log(app.database())