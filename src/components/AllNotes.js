import React, { useContext, useEffect, useState } from "react";
import "../styles/AllNotes.css";
import OneNote from "./OneNote";
import { RefreshContext } from "../contexts/Refresh";
import AddNote from "./AddNote";

export default function AllNotes() {
   const [notes, setNotes] = useState([]);
   let contextData = useContext(RefreshContext);

   //Fetch all notes stored in DataBase
   let fetchNotes = async () => {
      try {
         let results = await (await fetch("http://localhost:5000/notes")).json();
         console.log(results);
         setNotes(results.reverse());
      } catch (error) {
         console.log(error);
      }
   };

   //Trigger the fetch, whenerver Save button clicked
   useEffect(() => {
      fetchNotes();
   }, [contextData.trigger]);

   return (
      <div className="" id="notesContainer">
         <AddNote/>

         {/* <h1>All Notes</h1> */}
         {notes.map((note) => {
            return (
               <OneNote key={note.id} uniqueId={note.id} title={note.title} content={note.content} />
            );
         })}
      </div>
   );
}
