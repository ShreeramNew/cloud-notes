import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AllElementsContainer from "./AllElementsContainer";
import OpenNote from "./components/OpenNote";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AllNotes from "./components/AllNotes";

const router = createBrowserRouter([
   {
      path: "/",
      element: <AllElementsContainer />,
   },
   {
      path:"/allNotes",
      element:<AllNotes/>
   },
   {
      path: "/:id",
      element: <OpenNote />,
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/signup",
      element: <SignUp />,
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
