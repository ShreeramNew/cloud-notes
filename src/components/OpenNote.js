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
      let currentText = e.target.innerText;
      setShowSave(true);
   };

   const handleClose = () => {
      linkElement.current.click();
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
         <Link to="/" style={{ display: "none" }} ref={linkElement}></Link>

         {showSave && (
            <div id="buttonsContainer">
               <button className="saveButton">Save</button>
               <button className="saveButton cancelBtn">Cancel</button>
            </div>
         )}
      </div>
   );
}
