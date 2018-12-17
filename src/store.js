import {createStore, combineReducers} from "redux";
import logger from "redux-logger";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

export default createStore(
    combineReducers({	//keys are user-defined & values are the imported reducers
        math: math,
        user: user
    }),
    {}	// empty state object
);