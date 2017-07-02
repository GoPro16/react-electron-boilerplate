import { combineReducers } from "redux";
import projectReducer from './project';
const rootReducer = combineReducers({
    project:projectReducer
});

export default rootReducer;