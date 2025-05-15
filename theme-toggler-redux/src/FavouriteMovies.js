import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FavouriteMovies = () => {
  const moviesList = useSelector((state) => state.MoviesReducer);
  const dispatch = useDispatch();
  const UnsetFavourites = (id) => {
    dispatch({ type: "UNSET_FAVOURITE", payload: id });
  };
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <h1 className="p-4">List Of Favourites Movies</h1>
        {moviesList.map(
          (movie, index) =>
            movie.isFavourite && (
              <div className="col-xl-4 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="card h-100">
                  <img
                    src={movie.image}
                    className="card-img-top img-fluid"
                    alt="Movie pic"
                    style={{
                      objectFit: "cover",
                      height: "300px",
                      width: "100%",
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h2 className="card-title">{movie.name}</h2>
                    <p className="card-text flex-grow-1">{movie.description}</p>
                    <p>
                      <button
                        className="btn btn-warning favourite"
                        onClick={() => UnsetFavourites(movie.id)}
                      >
                        Remove from Favourites
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default FavouriteMovies;
