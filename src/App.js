import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/nav";
// import Footer from './components/footer/fo';
import Home from "./component/pages/Home/home";
import About from "./component/pages/about/about";
import Websiteowner from "./component/pages/websiteowner/websiteowner";
import SomeStoveIknowAbout from "./component/pages/somestoveiknowabout/somestoveiknowabout";
import Dropdown from "./component/pages/dropdown/dropdown";
import Somenews from "./component/pages/somenews/somenews";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Websiteowner />} />
        <Route path="/contact" element={<SomeStoveIknowAbout />} />
        <Route path="/contact" element={<Dropdown />} />
        <Route path="/contact" element={<Somenews />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;