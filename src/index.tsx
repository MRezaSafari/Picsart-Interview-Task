import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home";
import UsersList from "./pages/users";
import UserDetails from "./pages/user";

const routesList = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users/:username",
    element: <UserDetails />,
  },
  {
    path: "/users",
    element: <UsersList />,
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <main className="container">
      <RouterProvider router={routesList} />
    </main>
  );
}

if (module.hot) {
  module.hot.accept();
}
