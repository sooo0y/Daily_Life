import { createStore } from "redux";
import { combineReducers } from "redux";
import user from "../modules/user"

const rootReducer = combineReducers({
    user
});
const store = createStore(rootReducer);

export default store;