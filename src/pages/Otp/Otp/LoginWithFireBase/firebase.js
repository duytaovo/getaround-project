// import firebasee from 'firebase/app'
// import 'firebase/auth'
// import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: 'AIzaSyBRhgufi0z_I3ujmwgee7qx0BCAM-m5QDU',
//   authDomain: 'clone-music-yt-typescript.firebaseapp.com',
//   projectId: 'clone-music-yt-typescript',
//   storageBucket: 'clone-music-yt-typescript.appspot.com',
//   messagingSenderId: '28798679661',
//   appId: '1:28798679661:web:541dca962d5d68b81edd64',
//   measurementId: 'G-ZE7ST02M2C'
// }
// const app = initializeApp(firebaseConfig)
// // const auth = getAuth(app)
// const provider = new GoogleAuthProvider()
// firebasee.initializeApp(firebaseConfig)
// const auth = firebase.auth()
// export { auth, firebasee, provider }

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBRhgufi0z_I3ujmwgee7qx0BCAM-m5QDU',
  authDomain: 'clone-music-yt-typescript.firebaseapp.com',
  projectId: 'clone-music-yt-typescript',
  storageBucket: 'clone-music-yt-typescript.appspot.com',
  messagingSenderId: '28798679661',
  appId: '1:28798679661:web:541dca962d5d68b81edd64',
  measurementId: 'G-ZE7ST02M2C'
}
const app = initializeApp(firebaseConfig)
// firebase.initializeApp(firebaseConfig)
// const auth = firebase.auth()
const auth = getAuth(app)
export { auth, app }
