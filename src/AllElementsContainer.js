import "./App.css";
import AllNotes from "./components/AllNotes";
import Refresh from "./contexts/Refresh";

export default function AllElementsContainer() {
   return (
      <div id="componentsConatiner">
         <Refresh>
            <AllNotes/>
         </Refresh>
      </div>
   );
}
