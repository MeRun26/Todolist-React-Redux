import * as actionTypes from "../actions/actionTypes";

const searchInitialState = {
	query: "",
	searchResults: [],
};

export const searchReducer = (state = searchInitialState, action) => {
	switch (action.type) {
		case actionTypes.SET_SEARCH_QUERY:
			return {
				...state,
				query: action.payload,
			};
		case actionTypes.SET_SEARCH_RESULTS:
			return {
				...state,
				searchResults: action.payload,
			};
		default:
			return state;
	}
};
