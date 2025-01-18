import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ActionablePoints from "./components/ActionablePoints";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy/:id/actionable-points" element={<ActionablePoints />} />
      </Routes>
    </Router>
  );
};

export default App;
