import { combineReducers, legacy_createStore as createStore } from "redux";
import toggleReducer from "./toggleReducer";
import MoviesReducer from "./MoviesReducer";

const mainReducer = combineReducers({ toggleReducer, MoviesReducer });

const store = createStore(mainReducer);

export default store;
