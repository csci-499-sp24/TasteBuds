import React, { useState } from "react";
import { useAuth } from "../firebase/userAuthContext";
import { useRouter } from "next/router";
import Link from "next/link";
import Sidebar from "@/components/sidebar";
const Registration = () => {
  const { signup, error } = useAuth();
  const [errors, setError] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();

  const userhandler = (event) => {
    const { name, value } = event.target;
    console.log(name + ":::::::::::" + value);
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const RegistrationHandler = async (e) => {
    e.preventDefault();
    setError(null);
    const { username, email, password, confirmPassword } = user;
    if (password !== confirmPassword) {
      setError("Password does not match");
      return;
    }
    
    try {
      await signup(email, password, username);
      router.push("/"); 
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div>
        <Sidebar/>
      </div>
      <div className = "bg-login"></div>
      <div className="main">
        <h3>Sign Up</h3>
        <form onSubmit={RegistrationHandler}>
          <label htmlFor="username">
            <b>Username: </b>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="user_credential_field"
            value={user.username}
            onChange={userhandler}
            placeholder="Enter your Username"
            required
          />
          <label htmlFor="email">
            <b>Email: </b>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="user_credential_field"
            value={user.email}
            onChange={userhandler}
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="password">
            <b>Password: </b>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="user_credential_field"
            value={user.password}
            onChange={userhandler}
            placeholder="Enter your Password"
            required
          />
          <label htmlFor="confirmPassword">
            <b>Confirm Password: </b>
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="user_credential_field"
            value={user.confirmPassword}
            onChange={userhandler}
            placeholder="Confirm your Password"
            required
          />
          {errors && <p className="error">{errors}</p>}
          <div className="wrap">
            <button className="submit login_button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
