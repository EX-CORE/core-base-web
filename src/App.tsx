import React from "react";
import { RouterProvider } from "react-router-dom";
import ModalManager from "./providers/ModalManager";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import { router } from "./providers/RouterProvider";

function App() {
  return (
    <React.StrictMode>
      <ReactQueryProvider>
        <RouterProvider router={router} />
        <ModalManager />
      </ReactQueryProvider>
    </React.StrictMode>
  );
}

export default App;
