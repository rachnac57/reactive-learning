import {createStore} from "redux";

var initialState = {
	result: 1,
	lastValues: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD":
		state = {
			...state,	// spead the original state in a new obj
			result: state.result + action.payload,	// reassign these values
			lastValues: [...state.lastValues, action.payload]
		}
		break;
		case "SUB":
		state = action.payload - 1;
		break;
	}
		return state;
};

const store = createStore(reducer);		// initial state = 10

store.subscribe(() => {
	console.log("hello",store.getState());
});

store.dispatch({
	type: "ADD",
	payload: 23
});	// Call add action through reducer


store.dispatch({
	type: "ADD",
	payload: 63
});	