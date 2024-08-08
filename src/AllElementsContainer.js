import "./App.css";
import AllNotes from "./components/AllNotes";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Refresh from "./contexts/Refresh";

export default function AllElementsContainer() {
   return (
      <div id="componentsConatiner">
         <Refresh>
            {/* <AllNotes /> */}
            <SignUp/>
         </Refresh>
      </div>
   );
}
