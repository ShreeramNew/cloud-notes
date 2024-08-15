import React, { useRef } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
   let usernameRef = useRef(null);
   let passwordRef = useRef(null);
   let linkToAllNotes = useRef(null);

   //Cleanup function
   const cleanupFun = () => {
      usernameRef.current.value = "";
      passwordRef.current.value = "";
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      let submittedData = {
         username: usernameRef.current.value,
         password: passwordRef.current.value,
      };

      //Submit data
      let submitURL = "http://localhost:5000/login";
      let submitResponse = await fetch(submitURL, {
         method: "post",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(submittedData),
         credentials: "include",
      });
      switch (submitResponse.status) {
         case 200:
            linkToAllNotes.current.click();
            break;
         case 400:
            alert("Incorrect username or password");
            cleanupFun();
            break;
         default:
            alert("Something went wrong!!Please try again");
            cleanupFun();
            break;
      }
   };
   return (
      <>
         <form onSubmit={handleSubmit} action="">
            <h2>Login</h2>
            <input
               ref={usernameRef}
               type="text"
               placeholder="Enter your username"
               required
               id="uname"
            />
            <input
               ref={passwordRef}
               type="password"
               placeholder="Enter the password"
               required
               id="password"
            />
            <input type="submit" value="Login" />
            <h4>
               Don't you have an account?<Link to="/signup">SignUp</Link>
            </h4>
            <Link to="/allNotes" ref={linkToAllNotes} />
         </form>
      </>
   );
}
