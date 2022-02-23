import reducers from "./reducers";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducers, {}, composeWithDevTools());

export default store;
