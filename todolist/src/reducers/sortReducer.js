import * as actionTypes from "../actions/actionTypes";

const sortInitialState = {
	isAlphabetSorting: false,
};

export const sortReducer = (state = sortInitialState, action) => {
	switch (action.type) {
		case actionTypes.SET_ALPHABET_SORTING:
			return {
				...state,
				isAlphabetSorting: !state.isAlphabetSorting,
			};
		default:
			return state;
	}
};
