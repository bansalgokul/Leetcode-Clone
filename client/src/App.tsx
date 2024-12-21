import "./App.css";
import Landing from "./components/Landing";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Signin from "./components/Signin";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhj4hQVdF-Y4AvbiZcFFO1K3eFzphhtcI",
  authDomain: "leetcode-clone-3c678.firebaseapp.com",
  projectId: "leetcode-clone-3c678",
  storageBucket: "leetcode-clone-3c678.firebasestorage.app",
  messagingSenderId: "849643026715",
  appId: "1:849643026715:web:8159be2735bd78e9b47bbe",
  measurementId: "G-RLY8VCHW9M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  return (
    <>
      <div>
        <Signin />
      </div>
    </>
  );
}

export default App;
