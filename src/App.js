import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AllElementsContainer from "./AllElementsContainer";
import OpenNote from "./components/OpenNote";

const router = createBrowserRouter([
   {
      path: "/",
      element: <AllElementsContainer />,
   },
   {
      path: "/:id",
      element: <OpenNote />,
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
