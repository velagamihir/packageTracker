import React from "react";
import { Route, Routes } from "react-router-dom";
import TrackPackage from "./Components/TrackPackage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<TrackPackage />} path="/"></Route>
      </Routes>
    </div>
  );
};

export default App;
