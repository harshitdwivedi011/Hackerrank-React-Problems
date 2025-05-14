let initialState = { theme: "Light" };
const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "Light" ? "dark" : "Light" };
    default:
      return state;
  }
};

export default toggleReducer;
