import * as React from "react";
import { createRoot } from "react-dom/client";

import AppRoot from "./app";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<AppRoot />);
}

if (module.hot) {
  module.hot.accept();
}
