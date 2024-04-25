import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Header from "./Components/Header";
import Technology from "./pages/Technology";


const App = () => {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />

        </Route>
      </Routes>

    </div>
  );
}

export default App;
