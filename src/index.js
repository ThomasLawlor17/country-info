import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppProvider from "./App.provider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AppProvider>
		<React.StrictMode>
      <BrowserRouter>
			  <App />
      </BrowserRouter>
		</React.StrictMode>
	</AppProvider>
);
