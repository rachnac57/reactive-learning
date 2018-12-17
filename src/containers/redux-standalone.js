import {createStore} from "redux";


const reducer = (state, action) => {
	switch (action.type) {
		case "ADD":
		state = action.payload + 1;
		break;
		case "SUB":
		state = action.payload - 1;
		break;
	}
		return state;
};

const store = createStore(reducer, 10);		// initial state = 10

store.subscribe(() => {
	console.log("hello",store.getState());
});

store.dispatch({
	type: "ADD",
	payload: 23
});	// Call add action through reducer
