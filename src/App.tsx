import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import CreateTeam from "./pages/CreateTeam";
import Home from "./pages/Home";

import GlobalStyles from "./styles/GlobalStyles";
import { TeamsProvider } from "./contexts/teams";

function App() {
  return (
    <TeamsProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateTeam />} />
        </Routes>
        <Footer />

        <GlobalStyles />
      </BrowserRouter>
    </TeamsProvider>
  );
}

export default App;
