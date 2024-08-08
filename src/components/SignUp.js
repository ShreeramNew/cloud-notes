import React from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

export default function SignUp() {
   return (
      <>
         <form action="">
            <h2>SignUp</h2>
            <input type="email" placeholder="Enter your email" required id="email" />
            <input type="password" placeholder="Enter the password" required id="password" />
            <input type="password" placeholder="Confirm password" required id="conPassword" />

            <input type="submit" value="SignUp" />
            <h4>
              Already have an account?<Link href="">Login</Link>
            </h4>
         </form>
      </>
   );
}
