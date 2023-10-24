import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import UsersList from "./pages/users";
import UserDetails from "./pages/user";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";

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
    <main>
      <ThemeProvider theme={{bgColor: '#f00'}}>
        <GlobalStyle />
        <RouterProvider router={routesList} />
      </ThemeProvider>
    </main>
  );
}

if (module.hot) {
  module.hot.accept();
}
