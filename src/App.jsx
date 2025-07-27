import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-app">
      <Navbar />
      <About />
      <Experience />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
