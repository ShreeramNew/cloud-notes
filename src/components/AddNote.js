import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/AddNote.css";
import { RefreshContext } from "../contexts/Refresh";
const BaseUrl = "http://localhost:5000/api";


export default function AddNote() {
   let Content = useRef(null);
   let contextData = useContext(RefreshContext);
   const [isPlaceholderPresent, setIsPlaceholderPresent] = useState(true);

   //Access the content element
   useEffect(() => {
      Content.current = document.getElementById("Content");
   }, []);

   //Working with placeholder
   let handleClickType = () => {
      if (isPlaceholderPresent) {
         Content.current.innerText = "";
         Content.current.style.opacity = "100%";
         setIsPlaceholderPresent(false);
      }
   };

   let handlePlaceholder = () => {
      if (Content.current.innerText === "") {
         Content.current.innerText = "Type here...";
         Content.current.style.opacity = "60%";
         setIsPlaceholderPresent(true);
      }
   };

   let handleSave = async () => {
      let data = {
         email: "shreerambca1@gmail.com",
         title: document.getElementById("Title").value,
         content: Content.current.innerText,
      };
      if (data.title === "" || data.content === "") {
         alert("Please fill both Title and Content");
         return;
      }

      //After getting the data, clear the fields
      document.getElementById("Title").value = "";
      Content.current.innerText = "";

      //Save the new note into database
      const API_URL = BaseUrl+"/notes/save";
      await fetch(API_URL, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
         credentials:"include"
      });

      contextData.setTrigger((prevValue) => !prevValue); //Trigger the refresh
   };

   return (
      <div id="AddNoteContainer">
         <input id="Title" type="text" placeholder="Title" />
         <div
            onFocus={handleClickType}
            id="Content"
            type="text"
            placeholder="Type here"
            contentEditable={true}
            onBlur={handlePlaceholder}
         >
            Type Here...
         </div>
         <button onClick={handleSave} id="Save">
            Save
         </button>
      </div>
   );
}
