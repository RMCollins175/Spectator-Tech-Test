import React from "react";
import DiscoverNews from "./pages/DiscoverNews";
import NavBar from "./components/NavBar";
import News from "./components/News";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <DiscoverNews />
      <News />
    </>
  );
}

export default App;
