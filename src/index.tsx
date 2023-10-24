import * as React from "react";
import { createRoot } from "react-dom/client";

import AppRoot from "./app";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<AppRoot />);
}

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
