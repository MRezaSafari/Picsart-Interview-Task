import React, { FC, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme, darkTheme } from "./models/theme";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

interface Props {}

const AppRoot: FC<Props> = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <main>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <RouterProvider router={routesList} />
      </ThemeProvider>
    </main>
  );
};

export default AppRoot;
