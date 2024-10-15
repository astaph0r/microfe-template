import React from "react";
import { Route, Routes } from "react-router-dom";

import R1R1 from "./R1R1";
import R1R2 from "./R1R2";

const App = () => {
	return (
    <Routes>
      <Route index element={<h2>Home 1</h2>} />
      <Route path="route1" element={<R1R1 />} />
      <Route path="route2" element={<R1R2 />} />
    </Routes>
    
);
}

export default App