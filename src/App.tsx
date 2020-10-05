import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateTeam from "./pages/CreateTeam";

import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="/create" element={<CreateTeam />} />
      </Routes>
      <Footer />

      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
