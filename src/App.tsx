import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/create" element={<div />} />
      </Routes>
      <Footer />

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
