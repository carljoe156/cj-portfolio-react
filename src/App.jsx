import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Blog from "./pages/Blog";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
