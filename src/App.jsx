// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FormSubmitted from "./pages/FormSubmitted";
// import PostPage from "./pages/PostPage";
import PageOne from "./pages/Page1";
import PageTwo from "./pages/Page2";
import PageThree from "./pages/Page3";

export default function App() {
  return (
    <>
      <Router>
        <div className="nav-bar">
          <nav>
            <ul className="nav nav-tabs mt-2">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                ></Link>
                Home
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link"></Link>
                About Us
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link"></Link>
                Contact
              </li>
              <li className="nav-item">
                <Link to="/Page1" className="nav-link"></Link>
                Page1
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/form-submitted" element={<FormSubmitted />} />
          {/* <Route path="/posts/:_id" element={<PostPage />} /> */}
          <Route path="/Page1" element={<PageOne />} />
          <Route path="/Page2" element={<PageTwo />} />
          <Route path="/Page3" element={<PageThree />} />
        </Routes>
      </Router>
    </>
  );
}
