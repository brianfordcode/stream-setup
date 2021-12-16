import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyDFsDq6bS3WKyhWiLWX1uglmQ2rxSaXMs8",
    authDomain: "stream-setup.firebaseapp.com",
    projectId: "stream-setup",
    storageBucket: "stream-setup.appspot.com",
    messagingSenderId: "266417636629",
    appId: "1:266417636629:web:6070edc91859f0ab2c151c",
    measurementId: "G-GP5R7Q8QT5"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

function login(callback) {
    const provider = new GoogleAuthProvider();
    // authenticate
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            callback(user)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

}

function logOut() {
    signOut(auth)
}


export { login, logOut }