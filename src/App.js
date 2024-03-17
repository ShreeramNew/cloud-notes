import "./App.css";
import AddNote from "./components/AddNote";
import AllNotes from "./components/AllNotes";
import OpenFullNote from "./contexts/OpenFullNote";
import Refresh from "./contexts/Refresh";


function App() {
   return (
      <>
         <div id="componentsConatiner">
            <Refresh>
               <AddNote />
                  <AllNotes />
            </Refresh>
         </div>
      </>
   );
}

export default App;
