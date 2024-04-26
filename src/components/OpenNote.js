/* eslint-disable no-restricted-globals */
import React, { useEffect, useState, useRef } from "react";
import "../styles/OpenNote.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";

export default function OpenNote() {
   const param = useParams();
   const [note, setNote] = useState({ content: "Loading", title: "loading.." });
   const [showSave, setShowSave] = useState(false);
   let linkElement = useRef(null);

   const url = `http://localhost:5000/notes?id=${param.id}`;

   const fetchPerticularNote = async () => {
      try {
         const response = await axios.get(url);
         console.log(url);
         console.log(response.data);
         setNote(response.data[0]);
      } catch (error) {
         console.log(error);
      }
   };
   useEffect(() => {
      fetchPerticularNote();
      document.getElementById("contentContainer").focus();
   }, []);

   const handleChange = (e) => {
      setShowSave(true);
   };

   let handleSave = async () => {
      //Handles save button
      let data = {
         id: param.id,
         email: "shreerambca1@gmail.com",
         title: document.getElementById("titleContainer").innerText,
         content: document.getElementById("contentContainer").innerText,
      };
      if (data.title === "" || data.content === "") {
         alert("Please fill both Title and Content");
         return;
      }

      const API_URL = "http://localhost:5000/update";
      await fetch(API_URL, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
      });
      linkElement.current.click();
   };

   const handleDelete = async () => {
      let result = confirm("Are you sure want to delete?");
      if (result) {
         const API_URL = `http://localhost:5000/delete?id=${param.id}`;
         await fetch(API_URL, {
            method: "delete",
            headers: {
               "Content-Type": "application/json",
            },
         });
         linkElement.current.click();
      }
   };
   const handleClose = () => {
      //Handles close button
      let newTitle = document.getElementById("titleContainer").innerText;
      let newContent = document.getElementById("contentContainer").innerText;
      if (note.title !== newTitle || note.content !== newContent) {
         let result = confirm("Changes are not saved. Do you still want to close?");
         if (result) {
            linkElement.current.click();
         }
      } else {
         linkElement.current.click();
      }
   };

   const handleCancel = () => {
      let result = confirm("Changes you made will be discarded. Do you still want to cancel?");
      if (result) {
         document.getElementById("titleContainer").innerText = note.title;
         document.getElementById("contentContainer").innerText = note.content;
      }
   };
   return (
      <div id="container">
         <div id="titleContainer" contentEditable="true" onInput={handleChange}>
            {note.title}
         </div>
         <div id="contentContainer" contentEditable="true" onInput={handleChange}>
            {note.content}
         </div>
         <button id="close" onClick={handleClose}>
            X
         </button>
         <button id="delete" onClick={handleDelete}>
            Delete
         </button>
         <Link to="/" style={{ display: "none" }} ref={linkElement}></Link>

         {showSave && (
            <div id="buttonsContainer">
               <button className="saveButton" onClick={handleSave}>
                  Save
               </button>
               <button className="saveButton cancelBtn" onClick={handleCancel}>
                  Cancel
               </button>
            </div>
         )}
      </div>
   );
}
