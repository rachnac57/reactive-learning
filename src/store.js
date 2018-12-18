import {createStore, combineReducers} from "redux";

import math from "./reducers/mathReducer";
import user from "./reducers/userReducer";

/*export default createStore(
    combineReducers({	//keys are user-defined & values are the imported reducers
        math: math,
        user: user
    }),
    {}	// empty state object
);*/

const app = combineReducers({
	mathState: math,
	userState: user
});

/* Obj. representing the initially persisted state of the
 app (for eg. result of an ajax call, etc.)
 This is going to end up in the reducers as the "state" argument &
 override existing values */

const persistedState = {
	math: {result: 100, lastValues: ["ADD"]},
	user: {name: "rat", age: 35}
};

/*
 Create a store from the reducers, optionally passing a persisted 
 initial state of the app. Or we cant pass this, or pass an empty state obj instead
 */

const store = createStore(app, persistedState);
export {store};