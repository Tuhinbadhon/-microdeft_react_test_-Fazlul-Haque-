import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
