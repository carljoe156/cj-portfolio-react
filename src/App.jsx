import React from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Blog from "./pages/Blog";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
