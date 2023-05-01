import React from "react";
import { Header, About, Projects, Contact } from "./Containers";

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
