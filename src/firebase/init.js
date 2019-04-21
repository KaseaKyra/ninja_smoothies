import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBbd3oaQ6QAmnq3Rl3gRU6F_Um4MisJRvg',
  authDomain: 'udemy-ninja-smoothies-e281c.firebaseapp.com',
  databaseURL: 'https://udemy-ninja-smoothies-e281c.firebaseio.com',
  projectId: 'udemy-ninja-smoothies-e281c',
  storageBucket: 'udemy-ninja-smoothies-e281c.appspot.com',
  messagingSenderId: '600696906263'
};

const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({timestampsInSnapshots: true})
export default firebaseApp.firestore() // export section database
