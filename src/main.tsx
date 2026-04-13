import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// #region agent log
fetch("http://127.0.0.1:7327/ingest/f62c733a-6f21-472f-b6df-fbe754224eb5", {
  method: "POST",
  headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "abc4c9" },
  body: JSON.stringify({
    sessionId: "abc4c9",
    runId: "verify",
    hypothesisId: "H1",
    location: "main.tsx:beforeCreateRoot",
    message: "main module reached createRoot",
    data: { hasRootEl: !!document.getElementById("root") },
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion

createRoot(document.getElementById("root")!).render(<App />);

// #region agent log
fetch("http://127.0.0.1:7327/ingest/f62c733a-6f21-472f-b6df-fbe754224eb5", {
  method: "POST",
  headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "abc4c9" },
  body: JSON.stringify({
    sessionId: "abc4c9",
    runId: "verify",
    hypothesisId: "H1",
    location: "main.tsx:afterRender",
    message: "createRoot.render called",
    data: {},
    timestamp: Date.now(),
  }),
}).catch(() => {});
// #endregion
