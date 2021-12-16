import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



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
const analytics = getAnalytics(app);

createApp(App).use(router).mount('#app')
