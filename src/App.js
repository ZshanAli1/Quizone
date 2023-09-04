import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Room from "./components/Room/Room";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Counter />} />
        <Route path='/room' element={<Room />} />
      </Routes>
    </Router>
  );
}

export default App;
