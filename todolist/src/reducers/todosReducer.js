import * as actionTypes from "../actions/actionTypes";

const todosInitialState = {
	todos: [],
	isLoading: false,
};

export const todosReducer = (state = todosInitialState, action) => {
	switch (action.type) {
		case actionTypes.LOADING_START:
			return {
				...state,
				isLoading: true,
			};
		case actionTypes.LOADING_END:
			return {
				...state,
				isLoading: false,
			};
		case actionTypes.ADD_TODO:
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		case actionTypes.EDIT_TODO:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id ? action.payload.todo : todo,
				),
			};
		case actionTypes.DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		case actionTypes.SET_TODOS:
			return {
				...state,
				todos: action.payload,
			};
		default:
			return state;
	}
};
