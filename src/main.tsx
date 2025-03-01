import App from "./App.tsx";

import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider attribute="class">
			<Theme>
				<App />
			</Theme>
		</ThemeProvider>
	</StrictMode>,
);
