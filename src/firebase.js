// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCH2tu1b2c5Aqv3mBvTp1UoVQowLiXb0W0',
  authDomain: 'the-gold-panicles-f4af6.firebaseapp.com',
  projectId: 'the-gold-panicles-f4af6',
  storageBucket: 'the-gold-panicles-f4af6.appspot.com', // corrected typo
  messagingSenderId: '327522116487',
  appId: '1:327522116487:web:0a3329bb42fed50fbe6922',
  measurementId: 'G-VC5RD9SZWW',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
