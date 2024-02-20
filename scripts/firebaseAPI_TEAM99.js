//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
      apiKey: "AIzaSyAjg4M36GPzkKCES3cMwhVJXIRMBcUUr84",
      authDomain: "comp1800-myhike.firebaseapp.com",
      projectId: "comp1800-myhike",
      storageBucket: "comp1800-myhike.appspot.com",
      messagingSenderId: "735362781215",
      appId: "1:735362781215:web:ce5eca82d074bea8cdc52a"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
