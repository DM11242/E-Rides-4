import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCjIQ_AB-OW421NuUPPwzDD1wj_NaYK__s",
    authDomain: "e-ride-b513d.firebaseapp.com",
    projectId: "e-ride-b513d",
    storageBucket: "e-ride-b513d.appspot.com",
    messagingSenderId: "262934504277",
    appId: "1:262934504277:web:b1f511db73c7049b6985dc"
  };
  
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
