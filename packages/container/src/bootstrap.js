import { createRoot } from "react-dom/client";
import App from "./app";

console.log("Container!");

const el = document.getElementById("root");
const root = createRoot(el);
root.render(<App />);
