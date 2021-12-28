import React, { Component } from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/about"  element={<About />}  />
                 <Route path="/contact"  element={<Contact />}  />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
