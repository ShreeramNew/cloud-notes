import React, { useContext, useEffect, useState, useRef } from "react";
import "../styles/AllNotes.css";
import OneNote from "./OneNote";
import { RefreshContext } from "../contexts/Refresh";
import AddNote from "./AddNote";
import HandleError from "./HandleError";
import Login from "./Login";
import Loading from "./Loading";
import { Link } from "react-router-dom";

export default function AllNotes() {
   const [notes, setNotes] = useState([]);
   const [serverError, setServerError] = useState(false);
   const [showLoading, setShowLoading] = useState(true);
   const linkTologin = useRef(null);
   let contextData = useContext(RefreshContext);

   //Fetch all notes stored in DataBase
   let fetchNotes = async () => {
      try {
         let response = await fetch("http://localhost:5000/notes", { credentials: "include" });
         switch (response.status) {
            case 200:
               let results = await response.json();
               setNotes(results.reverse());
               setServerError(false);
               break;
            case 401:
               linkTologin.current.click();
               break;
            default:
               serverError(true);
               break;
         }
         setShowLoading(false);
      } catch (error) {
         setServerError(true);
         console.log(error);
         setShowLoading(false);
      }
   };

   //Trigger the fetch, whenerver Save button clicked
   useEffect(() => {
      fetchNotes();
   }, [contextData.trigger]);

   return (
      <div className="" id="notesContainer">
         {!serverError && !showLoading && <AddNote />}
         {serverError && <HandleError />}
         {showLoading && <Loading />}
         <Link ref={linkTologin} style={{ display: "none" }} to="/login" />

         {/* <h1>All Notes</h1> */}
         {notes.map((note) => {
            return (
               <OneNote
                  key={note.id}
                  uniqueId={note.id}
                  title={note.title}
                  content={note.content}
               />
            );
         })}
      </div>
   );
}
