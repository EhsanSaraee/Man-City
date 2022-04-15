import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
   apiKey: 'AIzaSyAdNEBWW5zJBHckmyafWUz0k3A_yqJF_gQ',
   authDomain: 'man-city-37c4a.firebaseapp.com',
   projectId: 'man-city-37c4a',
   storageBucket: 'man-city-37c4a.appspot.com',
   messagingSenderId: '513257660345',
   appId: '1:513257660345:web:ac49fc262f02f036a92068',
};

export const app = firebase.initializeApp(firebaseConfig);
