// base
import React from "react";

// libs
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
//import ReactGA from "react-ga";

// custom
import "./index.css";
import App from "./App";
import { MainProvider } from "./contexts/main_context";
import { AuthProvider } from "./contexts/auth_context";

// Replace 'UA-XXXXXXXX-X' with your actual Tracking ID
//ReactGA.initialize("G-H5LSZEQB2V");

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<AuthProvider>
		<MainProvider>
			<App />
		</MainProvider>
	</AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
