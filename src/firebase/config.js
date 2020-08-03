import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCAvmeAg3k0mCztFPEqGR019edjPpBGsXU",
    authDomain: "thegram-cdcef.firebaseapp.com",
    databaseURL: "https://thegram-cdcef.firebaseio.com",
    projectId: "thegram-cdcef",
    storageBucket: "thegram-cdcef.appspot.com",
    messagingSenderId: "529365391774",
    appId: "1:529365391774:web:945b05acb805623a0e5e8f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export {projectStorage, projectFirestore};
  