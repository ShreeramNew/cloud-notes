import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
   return (
      <>
         <form action="">
            <h2>Login</h2>
            <input type="email" placeholder="Enter your email" required id="email" />
            <input type="password" placeholder="Enter the password" required id="password" />
            <input type="submit" value="Login" />
            <h4>
               Don't you have an account?<Link href="">SignUp</Link>
            </h4>
         </form>
      </>
   );
}
