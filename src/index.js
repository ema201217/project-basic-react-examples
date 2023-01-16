import React from "react";
import ReactDOM from "react-dom/client";
import { ProviderRouter } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProviderRouter />
  </React.StrictMode>
);
