import * as React from 'react';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import Firebase from 'firebase'

const firebaseconfig = {
    apiKey: "AIzaSyCBsmhXxow-LfRKucCUGGQbImOQ94SaZcQ",
    authDomain: "coursedemoproj.firebaseapp.com",
    projectId: "coursedemoproj",
    storageBucket: "coursedemoproj.appspot.com",
    messagingSenderId: "22950361175",
    appId: "1:22950361175:web:5c1582ac4682394c418b12",
    measurementId: "G-GYWBNY2N1Q"
};
if (!Firebase.apps.length) {
    Firebase.initializeApp(firebaseconfig);
}

export default () => {
    return { Firebase, auth, }
}