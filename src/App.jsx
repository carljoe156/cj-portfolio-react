import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <About />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
