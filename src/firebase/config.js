import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBs_aPvazi0YwhRawjHKit0O5OM7PWHI18",
  authDomain: "project-management-16728.firebaseapp.com",
  projectId: "project-management-16728",
  storageBucket: "project-management-16728.appspot.com",
  messagingSenderId: "411580697730",
  appId: "1:411580697730:web:d7e30c06e60e1288ca789b"
};

  //init firebase
  firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth= firebase.auth()
const projectStorage = firebase.storage()
//timeStamp
const timestamp=firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp, projectStorage}
