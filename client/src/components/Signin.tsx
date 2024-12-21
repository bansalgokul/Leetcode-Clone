import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";

const actionCodeSettings = {
  url: "http://localhost:5173",
  handleCodeInApp: true,
};

const Signin = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");

  const onSignIn = async () => {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        alert(`Email sent to ${email}`);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        alert("Error: " + errorMessage);
      });
  };

  return (
    <div>
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={onSignIn}>Sign Up</button>
    </div>
  );
};

export default Signin;
