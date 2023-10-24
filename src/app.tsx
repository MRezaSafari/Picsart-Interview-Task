import React, { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme, darkTheme } from "./models/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import UsersList from "./pages/users";
import UserDetails from "./pages/user";
import { useThemeStore } from "./states";

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

const AppRoot = () => {
  const themeStore = useThemeStore();

  return (
    <main>
      <ThemeProvider
        theme={themeStore.theme === "light" ? lightTheme : darkTheme}
      >
        <button
          onClick={() => {
            themeStore.switch(themeStore.theme === "light" ? "dark" : "light");
          }}
        >
          Change theme
        </button>
        <GlobalStyle />
        <RouterProvider router={routesList} />
      </ThemeProvider>
    </main>
  );
};

export default AppRoot;
