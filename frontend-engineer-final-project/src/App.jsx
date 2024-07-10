import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Footer,
  Form,
  Global,
  Hero,
  Indonesia,
  Navbar,
  Provinsi,
} from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/global" element={<Global />} />
        <Route path="/indonesia" element={<Indonesia />} />
        <Route path="/provinsi" element={<Provinsi />} />
        <Route path="/about" element={<Form />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
