import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { TasksContextProvider } from "./context/TasksContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </BrowserRouter>
);
