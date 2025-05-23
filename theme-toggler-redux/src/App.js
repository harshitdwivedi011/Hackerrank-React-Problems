import Contact from "./Contact";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavouriteMovies from "./FavouriteMovies";
import Movies from "./Movies";
function App() {
  const theme = useSelector((state) => state.toggleReducer.theme);
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
              <Link
                to="/movies"
                className="me-2 p-4 fs-5 toplink"
                style={navStyle}
              >
                {" "}
                Movies{" "}
              </Link>
              <Link
                to="/favourites"
                className="me-2 p-4 fs-5 toplink"
                style={navStyle}
              >
                {" "}
                Favourite Movies{" "}
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
          <Route path="/movies" element={<Movies />} />
          <Route path="/favourites" element={<FavouriteMovies />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
