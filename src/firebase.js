import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var config = {
    apiKey: "AIzaSyDkm_R736w1s1JFDHm858OGZCPVooLFhDk",
    authDomain: "react-slack-clone-790a2.firebaseapp.com",
    databaseURL: "https://react-slack-clone-790a2.firebaseio.com",
    projectId: "react-slack-clone-790a2",
    storageBucket: "react-slack-clone-790a2.appspot.com",
    messagingSenderId: "976514002432"
};
firebase.initializeApp(config);

export default firebase;