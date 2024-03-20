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
import Try from "./components/Try";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Try />,
   },
   {
      path: "/hh",
      element: <AddNote />,
   },
]);

function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
