import React, { useContext } from "react";
import "../styles/OneNote.css";
import { OpenNote } from "../contexts/OpenFullNote";

export default function OneNote(props) {
   let value = useContext(OpenNote);
   let handleopen = () => {
      // let SavedTitle = props.title;
      // let SavedContent = props.content;
   };
   return (
      <>
         <div onClick={handleopen} id="NoteContainer">
            <h2 id="incomingTitle">{props.title}</h2>
            <div id="incomingContent">{props.content}</div>
         </div>
      </>
   );
}
