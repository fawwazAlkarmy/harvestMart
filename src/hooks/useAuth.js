import { useState } from "react";
import { createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";
import { auth } from "../firebase";

export const useAuth = () => {
  const [error, setError] = useState(null);

  const signup = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log("Signup successful:", user);
    } catch (error) {
      if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
        setError("The email address is already in use by another account.");
      } else if (error.code === AuthErrorCodes.INVALID_EMAIL) {
        setError("The email address is not valid.");
      } else if (error.code === AuthErrorCodes.WEAK_PASSWORD) {
        setError("The password is too weak.");
      } else {
        setError("An error occurred during signup. Please try again.");
      }
      console.error("Signup error:", error);
    }
  };

  return { error, signup };
};
