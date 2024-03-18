import "./App.css";
import AddNote from "./components/AddNote";
import AllNotes from "./components/AllNotes";
import OpenNote from "./components/OpenNote";
import Refresh from "./contexts/Refresh";

export default function AllElementsContainer() {
   return (
      <>
         <div id="componentsConatiner">
            <Refresh>
               <AddNote />
               <AllNotes />
            </Refresh>
            {/* <OpenNote/> */}
         </div>
      </>
   );
}
