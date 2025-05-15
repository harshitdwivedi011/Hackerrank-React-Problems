import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Movies = () => {
  const moviesList = useSelector((state) => state.MoviesReducer);
  const dispatch = useDispatch();

  const setFavourites = (id) => {
    dispatch({ type: "SET_FAVOURITE", payload: id });
  };
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <h1 className="p-4">List Of Movies</h1>
        {moviesList.map((movie, index) => (
          <div className="col-xl-4 col-md-6 col-sm-12 mb-5" key={index}>
            <div className="card h-100">
              <img
                src={movie.image}
                className="card-img-top img-fluid"
                alt="Movie pic"
                style={{ objectFit: "cover", height: "300px", width: "100%" }}
              />
              <div className="card-body d-flex flex-column">
                <h2 className="card-title">{movie.name}</h2>
                <p className="card-text flex-grow-1">{movie.description}</p>
                <button
                  className="btn btn-warning mt-2"
                  onClick={() => setFavourites(movie.id)}
                >
                  {movie.isFavourite
                    ? "Added to Favourites"
                    : "Save As Favourites"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
