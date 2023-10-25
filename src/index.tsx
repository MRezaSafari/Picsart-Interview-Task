import * as React from "react";
import { createRoot } from "react-dom/client";

import AppRoot from "./app";
import { BrowserRouter } from "react-router-dom";

let rootElement: unknown = null;

document.addEventListener("DOMContentLoaded", function (event) {
  if (!rootElement) {
    rootElement = document.getElementById("root") as HTMLElement;
    const root = createRoot(rootElement as HTMLDivElement);
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <AppRoot />
        </BrowserRouter>
      </React.StrictMode>
    );
  }
});

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
