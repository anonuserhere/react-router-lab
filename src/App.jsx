import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import FormSubmitted from "./pages/FormSubmitted";
// import PageOne from "./pages/Page1";
// import PageTwo from "./pages/Page2";
// import PageThree from "./pages/Page3";
// import PostPage from "./pages/PostPage";
import * as Pages from "./pages";

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
          <Route path="/" element={<Pages.Home />} />
          <Route path="/About" element={<Pages.About />} />
          <Route path="/Contact" element={<Pages.Contact />} />
          <Route path="/form-submitted" element={<Pages.FormSubmitted />} />
          {/* <Route path="/posts/:_id" element={<PostPage />} /> */}
          <Route path="/Page1" element={<Pages.PageOne />} />
          <Route path="/Page2" element={<Pages.PageTwo />} />
          <Route path="/Page3" element={<Pages.PageThree />} />
        </Routes>
      </Router>
    </>
  );
}
