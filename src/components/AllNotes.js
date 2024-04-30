import React, { useContext, useEffect, useState } from "react";
import "../styles/AllNotes.css";
import OneNote from "./OneNote";
import { RefreshContext } from "../contexts/Refresh";
import AddNote from "./AddNote";
import HandleError from "./HandleError";

export default function AllNotes() {
   const [notes, setNotes] = useState([]);
   const [serverError, setServerError] = useState(false);
   let contextData = useContext(RefreshContext);

   //Fetch all notes stored in DataBase
   let fetchNotes = async () => {
      try {
         let results = await (await fetch("http://localhost:5000/notes")).json();
         console.log(results);
         setNotes(results.reverse());
         if (results) {
            alert("Yes it is null");
         }
      } catch (error) {
         setServerError(true)
         console.log(error);
      }
   };

   //Trigger the fetch, whenerver Save button clicked
   useEffect(() => {
      fetchNotes();
   }, [contextData.trigger]);

   return (
      <div className="" id="notesContainer">
         {!serverError && <AddNote />}
         {serverError && <HandleError/>}


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
