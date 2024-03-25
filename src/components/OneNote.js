import React, { useContext, useRef } from "react";
import "../styles/OneNote.css";
import { OpenNoteContext } from "../contexts/OpenFullNote";
import { Link } from "react-router-dom";

export default function OneNote(props) {
   // let value = useContext(OpenNoteContext);
   const linkElement = useRef();
   let handleopen = () => {
      linkElement.current.click();
   };
   return (
      <div onClick={handleopen} id="NoteContainer">
         <Link to={`/${props.uniqueId}`} id="link" ref={linkElement}></Link>
         <h2 id="incomingTitle">{props.title}</h2>
         <div id="incomingContent">{props.content}</div>
      </div>
   );
}
