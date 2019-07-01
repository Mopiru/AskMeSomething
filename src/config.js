import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyBOfe6I3-80EO8IPZSq_dN-ArAwS18zXIo',
  authDomain: 'askmesomething-98339.firebaseapp.com',
  databaseURL: 'https://askmesomething-98339.firebaseio.com',
  projectId: 'askmesomething-98339',
  storageBucket: 'gs://askmesomething-98339.appspot.com',
  messagingSenderId: '21704753165'
};
let app = Firebase.initializeApp(config);
export const db = app.database();
