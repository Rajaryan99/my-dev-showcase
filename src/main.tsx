import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Stairs from "./components/Stairs.tsx";

createRoot(document.getElementById("root")!).render(
  <Stairs>
<App />
</Stairs>
);
