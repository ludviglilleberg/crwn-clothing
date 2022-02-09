import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyD079fZIKe0vz9oKZkdlfTf1SPaortTSUM",
  authDomain: "crwn-db-2a5b7.firebaseapp.com",
  projectId: "crwn-db-2a5b7",
  storageBucket: "crwn-db-2a5b7.appspot.com",
  messagingSenderId: "1026611495210",
  appId: "1:1026611495210:web:c7004f4aa7b8eb91b49e53",
  measurementId: "G-6398MPGPZT"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase