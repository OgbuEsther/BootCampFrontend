import React from "react";

import "./App.css";
import HomeScreen from "./components/HomeScreen";
import HeaderT from "./components/PAGEONE/HeaderT";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeaderT />

      <HomeScreen />
      <Footer />
    </div>
  );
}

export default App;
