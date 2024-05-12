import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebaseConfig";
import { useRouter } from "next/router";
import Sidebar from "@/components/sidebar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const lognIn = async (e) => {
    e.preventDefault();
    setError(null);
    console.log(email, password);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      router.replace("/");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("No user found with the provided email.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else {
        setError("An error occurred. Please check your email or password.");
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div className = "bg"></div>
      <div className="main">
        <h3>Login</h3>
        <form onSubmit={lognIn}>
          <label htmlFor="email">
            <b>Email: </b>
          </label>
          <input
            type="email"
            id="email"
            className="user_credential_field"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="password">
            <b>Password: </b>
          </label>
          <input
            type="password"
            id="password"
            className="user_credential_field"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
            required
          />
          {error && <p className="error">{error}</p>}
          <div className="wrap">
            <button className="submit login_button" type="submit">
              Submit
            </button>
          </div>
        </form>
        <p>
          Not registered? Create an account{" "}
          <Link href="/signup" className="sign-up">
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
