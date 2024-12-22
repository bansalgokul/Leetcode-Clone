import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../App";

const Signin = () => {
  const onSignIn = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          throw new Error("No credential found");
        }
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div>
      <button onClick={onSignIn}>Sign Up</button>
    </div>
  );
};

export default Signin;
