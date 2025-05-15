let initialState = [
  {
    id: 1,
    name: "RRR",
    image:
      "https://i.ytimg.com/vi/lDVQojLPI4Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC6gIDNWv5NMGJYnurvl1E-l4eG4w",
    description:
      "An epic action drama set in the 1920s, RRR follows two revolutionaries who fight against British colonial rule, blending history with intense action and emotion.",
    isFavourite: false,
  },
  {
    id: 2,
    name: "Master",
    image:
      "https://w0.peakpx.com/wallpaper/720/8/HD-wallpaper-vijay-master-movie-poster.jpg",
    description:
      "Master is a gripping Tamil action-thriller about an alcoholic professor who is sent to a juvenile school, where he clashes with a ruthless gangster exploiting the children.",
    isFavourite: false,
  },
  {
    id: 3,
    name: "Faster",
    image:
      "https://i.pinimg.com/736x/e5/48/ee/e548ee50e1c1afd27661f491a3d2e6fd.jpg",
    description:
      "In Faster, an ex-con sets out on a deadly mission of vengeance after his brother’s murder, but is pursued by a veteran cop and a contract killer to a juvenile school",
    isFavourite: false,
  },
];
const MoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FAVOURITE":
      return state.map((movie) =>
        movie.id === action.payload ? { ...movie, isFavourite: true } : movie
      );
    case "UNSET_FAVOURITE":
      return state.map((movie) =>
        movie.id === action.payload ? { ...movie, isFavourite: false } : movie
      );
    default:
      return state;
  }
};

export default MoviesReducer;
