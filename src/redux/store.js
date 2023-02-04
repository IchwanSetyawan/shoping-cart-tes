import { createStore, applyMiddleware } from "redux";
import tshirtReducer from "./TShirt/TShirtReducer";
import thunk from "redux-thunk";

const store = createStore(tshirtReducer, applyMiddleware(thunk));

export default store;