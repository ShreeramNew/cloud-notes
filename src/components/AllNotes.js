import React, { useContext, useEffect, useState } from "react";
import "../styles/AllNotes.css";
import OneNote from "./OneNote";
import { v4 as uuidv4 } from "uuid";
import { RefreshContext } from "../contexts/Refresh";
export default function AllNotes() {
   const [notes, setNotes] = useState([]);
   let contextData = useContext(RefreshContext);
   let fetchNotes = async () => {
      try {
         let results = await (await fetch("http://localhost:5000")).json();
         setNotes(results.reverse());
      } catch (error) {
        console.log(error);
      }
   };
   useEffect(() => {
      fetchNotes();
   }, [contextData.trigger]);

   return (
      <div id="notesContainer">
         <h1>All Notes</h1>
         {notes.map((note) => {
            return <OneNote key={uuidv4()} title={note.title} content={note.content} />;
         })}
      </div>
   );
}
