import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AdminFlagProvider>
      <App />
    </AdminFlagProvider>
  </StrictMode>
);
