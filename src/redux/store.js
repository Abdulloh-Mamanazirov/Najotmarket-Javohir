import { createStore } from "redux";
import rootReducers from "./reduxs";

const store = createStore(rootReducers);

export default store;