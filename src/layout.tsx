import React, { FC } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { lightTheme, darkTheme } from "./models/theme";
import { useThemeStore } from "./states";
import { Header, Logo } from "./app.styles";
import { IconBrightnessDown, IconMoonStars } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Button from "./components/button/button";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 1,
};

const RootLayout: FC = () => {
  const themeStore = useThemeStore();
  const { pathname } = useLocation();

  return (
    <main>
      <ThemeProvider
        theme={themeStore.theme === "light" ? lightTheme : darkTheme}
      >
        <GlobalStyle />
        <div>
          <Header className="container">
            <Logo href="/" />

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>

            <div>
              {themeStore.theme === "light" && (
                <IconMoonStars
                  size={30}
                  onClick={() => themeStore.switch("dark")}
                />
              )}
              {themeStore.theme === "dark" && (
                <IconBrightnessDown
                  size={30}
                  onClick={() => themeStore.switch("light")}
                />
              )}
            </div>
          </Header>
         
          <motion.div
            key={pathname}
            initial="initial"
            animate="in"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Outlet />
          </motion.div>
        </div>
      </ThemeProvider>
    </main>
  );
};

export default RootLayout;
