import { createApp } from "vue";
import App from "./App.vue";
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKXl94sMfTS0vQEIZ0shlK6lKz3smPfW8",
  authDomain: "vite-project-d0e64.firebaseapp.com",
  projectId: "vite-project-d0e64",
  storageBucket: "vite-project-d0e64.appspot.com",
  messagingSenderId: "607955833960",
  appId: "1:607955833960:web:dfc3deee54f0def8d897dd"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig); ここだけ少し変更しています
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount("#app");