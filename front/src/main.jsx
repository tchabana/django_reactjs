import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import Root from "./routes/root";
import EditContact from "./routes/edit";
import Index from "./routes/index";
import "./service/ApiRoute";
import CreateContact from "./routes/create";
import { AppProvider } from "./context/AppContext";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
      {
        path: "contacts-create/",
        element: <CreateContact />,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
      },
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AppProvider>
        <RouterProvider router={router}>
          <Root />
        </RouterProvider>
      </AppProvider>
  </React.StrictMode>
);