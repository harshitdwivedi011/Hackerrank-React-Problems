import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  const navStyle = {
    textDecoration: "none",
    color: theme === "dark" ? "aliceblue" : "black",
  };
  return (
    <div
      className={theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}
    >
      <Router>
        <header className="container-fluid p-3">
          <div className="row">
            <div className="col-xl-3 ps-5">
              <h3 className="text-primary">Animal Planet</h3>
            </div>
            <div className="col-xl-7">
              <Link to="/" className="me-2 p-4 fs-5 toplink" style={navStyle}>
                {" "}
                Home{" "}
              </Link>
              <Link
                to="/contact"
                className="me-2 p-4 fs-5 toplink"
                style={navStyle}
              >
                {" "}
                Contact{" "}
              </Link>
            </div>
            <div className="col-xl-2">
              <button className="btn btn-warning" onClick={toggleTheme}>
                Toggle Theme
              </button>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
