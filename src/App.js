import {
   Route,
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import AddNote from "./components/AddNote";
import AllNotes from "./components/AllNotes";
import OpenNote from "./components/OpenNote";
import Refresh from "./contexts/Refresh";
import OneNote from "./components/OneNote";
import AllElementsContainer from "./AllElementsContainer";

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path="/" element={<AllElementsContainer />}>
         <Route path="/OpenNote" element={<OpenNote />} />
      </Route>
   )
);

function App() {
   return (
      <>
         <RouterProvider router={router} />
         <AllElementsContainer />
      </>
   );
}

export default App;
