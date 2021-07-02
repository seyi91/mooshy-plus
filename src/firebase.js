import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA8SGro1uNl7XRwwsz4mWxqJuduuvYHEKI",
    authDomain: "mooshyplus-4e249.firebaseapp.com",
    projectId: "mooshyplus-4e249",
    storageBucket: "mooshyplus-4e249.appspot.com",
    messagingSenderId: "181099167672",
    appId: "1:181099167672:web:118a7df589ee1d9312594d",
    measurementId: "G-M80NK54BV5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;
   