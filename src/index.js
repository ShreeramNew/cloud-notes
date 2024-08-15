import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Refresh from "./contexts/Refresh";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <Refresh>
      <App />
   </Refresh>
);
reportWebVitals();
