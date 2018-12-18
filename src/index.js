import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";

import {store} from "./store";
import App2 from "./containers/react-redux-app";

// Will return the initial "state" assigned in the individual (user, math) reducers
console.log(store.getState());
/* output: Object {
	result:1,lastValues: [],
	name: "Max", age: 27
}*/

render(
    <Provider store={store}>
        <App2 />
    </Provider>,
    window.document.getElementById('sibling')
);


store.subscribe(() =>
{
	console.log("new state:", store.getState());
});
