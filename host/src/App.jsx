import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import App1 from "remote1/App1";
import App2 from "remote2/App2";
import Home from "./Home";

const App = () => {
	return (
		<BrowserRouter basename="/">
			<Routes>
				<Route
					path="/"
					element={
						<Suspense fallback={"Loading"}>
							<Home />
						</Suspense>
					}
				/>

				<Route
					path="/app1/*"
					element={
						<Suspense fallback={"Loading"}>
							{" "}
							<App1 />
						</Suspense>
					}
				/>
				<Route
					path="/app2/*"
					element={
						<Suspense fallback={"Loading"}>
							{" "}
							<App2 />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
