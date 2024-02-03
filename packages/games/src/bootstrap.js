import { createRoot } from "react-dom/client";
import App from "./app";

console.log("Games!");

const mount = (el) => {
	const root = createRoot(el);
	root.render(<App />);
};

if (process.env.NODE_ENV === "development") {
	const el = document.getElementById("games");
	if (el) {
		mount(el);
	}
}

export { mount };
