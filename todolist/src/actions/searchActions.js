import * as actionTypes from "./actionTypes";

export const setSearchQuery = (query) => ({
	type: actionTypes.SET_SEARCH_QUERY,
	payload: query,
});

export const setSearchResults = (results) => ({
	type: actionTypes.SET_SEARCH_RESULTS,
	payload: results,
});
