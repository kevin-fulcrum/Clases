import firebase from 'firebase'

console.log('process.env', process.env.apiKey)
//Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA96P0ioCO305rVdWAj31886N4e4AoEpgk",
    authDomain: "semana04-61064.firebaseapp.com",
    databaseURL: "https://semana04-61064.firebaseio.com",
    projectId: "semana04-61064",
    storageBucket: "semana04-61064.appspot.com",
    messagingSenderId: "511221625592",
    appId: "1:511221625592:web:8c499e5a602c439136c10d"
  };
  // Initialize Firebase
  const configFirebase = firebase.initializeApp(firebaseConfig);

  export default configFirebase;