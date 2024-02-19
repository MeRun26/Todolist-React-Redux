import * as actionTypes from "./actionTypes";

export const setTodos = (todos) => ({
	type: actionTypes.SET_TODOS,
	payload: todos,
});

export const addTodo = (todo) => ({
	type: actionTypes.ADD_TODO,
	payload: todo,
});

export const editTodo = (id, todo) => ({
	type: actionTypes.EDIT_TODO,
	payload: { id, todo },
});

export const deleteTodo = (id) => ({
	type: actionTypes.DELETE_TODO,
	payload: id,
});
