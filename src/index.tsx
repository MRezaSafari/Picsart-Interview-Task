// @ts-nocheck
// no check is just for the profile callback
import * as React from "react";
import { createRoot } from "react-dom/client";

import AppRoot from "./app";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";

let rootElement: unknown = null;

document.addEventListener("DOMContentLoaded", function (event) {
  const onRenderCallback: any = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions // the Set of interactions belonging to this update
  ) => {
    console.log(
      `${id}::${phase}::${actualDuration}::${baseDuration}::${startTime}::${commitTime}`
    );
  };

  if (!rootElement) {
    rootElement = document.getElementById("root") as HTMLElement;
    const root = createRoot(rootElement as HTMLDivElement);
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <BrowserRouter>
            <React.Profiler id="Navigation" onRender={onRenderCallback}>
              <AppRoot />
            </React.Profiler>
          </BrowserRouter>
        </ErrorBoundary>
      </React.StrictMode>
    );
  }
});

// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
