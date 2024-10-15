import React from "react";
import { Route, Routes } from "react-router-dom";
;
import R2R1 from "./R2R1";
import R2R2 from "./R2R2";


const App = () => {
  return (
		<Routes>
			<Route index element={<h2>Home 2</h2>} />
			<Route path="route1" element={<R2R1 />} />
			<Route path="route2" element={<R2R2 />} />
		</Routes>
	);
}

export default App
