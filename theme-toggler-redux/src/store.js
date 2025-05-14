import { legacy_createStore as createStore } from "redux";
import toggleReducer from "./toggleReducer";

const store = createStore(toggleReducer);

export default store;
