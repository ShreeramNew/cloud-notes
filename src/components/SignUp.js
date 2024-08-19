import React, { useRef } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
const BaseUrl = "http://localhost:5000/api";

export default function SignUp() {
   let usernameRef = useRef(null);
   let passwordRef = useRef(null);
   let confirmPasswordRef = useRef(null);
   let linkToAllNotes = useRef(null);

   //Cleanup function
   const cleanupFun = () => {
      usernameRef.current.value = "";
      passwordRef.current.value = "";
      confirmPasswordRef.current.value = "";
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      let submittedData = {
         username: usernameRef.current.value,
         password: passwordRef.current.value,
         confirmPassword: confirmPasswordRef.current.value,
      };
      if (submittedData.password !== submittedData.confirmPassword) {
         alert("Please confirm the password");
         cleanupFun();
         return;
      }

      //Check if username is already present or not
      let URL = BaseUrl + "/auth/getUsers";
      let response = await fetch(URL);
      let isUserPresent = false;
      if (response.status === 200) {
         let result = await response.json();
         result.forEach((user) => {
            if (user.username === submittedData.username) {
               alert("Sorry!This username is already created!");
               cleanupFun();
               isUserPresent = true;
            }
         });
      } else {
         alert("Sorry!Something went wrong");
         return;
      }
      if (isUserPresent) {
         return;
      }

      //If everything is okay, submit the data
      let submitURL = BaseUrl + "/auth/signup";
      let submitResponse = await fetch(submitURL, {
         method: "post",
         headers: {
            "content-type": "application/json",
         },
         body: JSON.stringify(submittedData),
         credentials: "include",
      });
      if (submitResponse.status === 200) {
         linkToAllNotes.current.click();
         cleanupFun();
      } else {
         alert("Sorry!Something went wrong");
         cleanupFun();
      }
   };
   return (
      <>
         <form onSubmit={handleSubmit} action="">
            <h2>SignUp</h2>
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
            <input
               ref={confirmPasswordRef}
               type="password"
               placeholder="Confirm password"
               required
               id="conPassword"
            />

            <input type="submit" value="SignUp" />
            <h4>
               Already have an account?<Link to="/login">Login</Link>
            </h4>
            <Link to="/allNotes" ref={linkToAllNotes} />
         </form>
      </>
   );
}
