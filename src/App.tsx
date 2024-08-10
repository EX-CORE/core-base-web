import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import { router } from "./providers/RouterProvider";

function App() {
  return (
    <React.StrictMode>
      <ReactQueryProvider>
        <RouterProvider router={router} />
      </ReactQueryProvider>
    </React.StrictMode>
  );
}

export default App;
