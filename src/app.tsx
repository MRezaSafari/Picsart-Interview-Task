import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import UsersList from "./pages/users";
import UserDetails from "./pages/user";
import Page404 from "./pages/404";
import RootLayout from "./layout";
import { AnimatePresence } from "framer-motion";

const AppRoot = () => {
  return (
    <AnimatePresence mode='sync'>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/users/:page?/:sortKey?/:sortOrder?" element={<UsersList />} />
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoot;
