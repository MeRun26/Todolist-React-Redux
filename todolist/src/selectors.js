// selectors.js
export const selectTodos = (state) => state.todos.todos;

export const selectSearchPhrase = (state) => state.search.query;

export const selectSearchResults = (state) => state.search.searchResults;

export const selectIsAlphabetSorting = (state) => state.sort.isAlphabetSorting;

export const selectIsLoading = (state) => state.todos.isLoading;

export const selectEditTodo = (state) => state.todos.todos;

export const selectFilteredAndSortedTodos = (state) => {
	const todos = state.todos.todos;
	const searchPhrase = state.search.query.toLowerCase();
	const isAlphabetSorting = state.sort.isAlphabetSorting;

	const filteredTodos = todos.filter((todo) =>
		todo.name.toLowerCase().includes(searchPhrase),
	);

	const sortedTodos = isAlphabetSorting
		? filteredTodos.slice().sort((a, b) => a.name.localeCompare(b.name))
		: filteredTodos;

	return sortedTodos;
};
