import { combineReducers } from "redux";
import ReducerAge from "./Age/ReducerAge";
import ReducerCounter from "./Counter/ReducerCounter";

const RootReducer = combineReducers({
    counterRoot: ReducerCounter,
    ageRoot: ReducerAge
})
export default RootReducer;