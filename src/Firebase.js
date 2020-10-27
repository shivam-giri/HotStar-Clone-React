import firebase from "firebase";

import "firebase/auth"; //auth
import "firebase/database"; //database can like sql , mongodb
import "firebase/storage"; //storage ///images , videos , photos , pdf , fonts

const firebaseConfig = {
  apiKey: "AIzaSyD2UClKAPYrXe2yRkvX5fYrpmDaLtMKT4Y",
  authDomain: "hotstar-clone-b2b99.firebaseapp.com",
  databaseURL: "https://hotstar-clone-b2b99.firebaseio.com",
  projectId: "hotstar-clone-b2b99",
  storageBucket: "hotstar-clone-b2b99.appspot.com",
  messagingSenderId: "344945991391",
  appId: "1:344945991391:web:0c5e83b546f3f9c244136a"
};

//initialize firebase and react application
firebase.initializeApp(firebaseConfig);

export default firebase;
