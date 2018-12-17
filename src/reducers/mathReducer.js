const mathReducer = (state = {
							result:1,
							lastValues: []
						}, action) => {
	switch (action.type) {
		case "ADD":
		state = {
			...state,	// spread the original state in a "new" obj
			result: state.result + action.payload,	// reassign these values
			lastValues: [...state.lastValues, action.payload]
		}
		break;
		case "SUB":
		state = {
			...state,
			result: state.result - action.payload,
			lastValues: [...state.lastValues, action.payload]
		}
		break;
	}
		return state;
}

export default mathReducer;