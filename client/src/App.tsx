import "./App.css";
import Landing from "./components/Landing";

import { initializeApp } from "firebase/app";
import Signin from "./components/Signin";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { userAtom } from "./store/atoms/user";

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
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();

// const analytics = getAnalytics(app);

function App() {
  const setUser = useSetRecoilState(userAtom);
  const [user, loading] = useAuthState(auth);

  if (user && user.email) {
    setUser({
      isLoggedIn: true,
      user: {
        email: user.email,
      },
    });
  } else {
    setUser({
      isLoggedIn: false,
      user: undefined,
    });
  }

  console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return (
      <>
        <div>
          <Landing />
        </div>
      </>
    );
  }

  return (
    <div>
      <Signin />
    </div>
  );
}

export default App;
