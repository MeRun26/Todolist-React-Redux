import * as actionTypes from "../actions";
import { setTodos } from "../actions";

export const loadTodo = () => {
	return async (dispatch) => {
		try {
			dispatch({ type: actionTypes.LOADING_START });
			const response = await fetch("http://localhost:1326/todos");
			const data = await response.json();
			dispatch(setTodos(data));
			dispatch({ type: actionTypes.LOADING_END });
		} catch (error) {
			console.error("Failed to load todos:", error);
			dispatch({ type: actionTypes.LOADING_END });
		}
	};
};

export const addTodo = (todo) => {
	return async (dispatch) => {
		try {
			const response = await fetch("http://localhost:1326/todos", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(todo),
			});
			if (!response.ok) {
				throw new Error("Ошибка при добавлении задачи");
			}
			const newTodo = await response.json();
			dispatch({
				type: actionTypes.ADD_TODO,
				payload: newTodo,
			});
		} catch (error) {
			console.error("Ошибка при добавлении задачи:", error);
		}
	};
};

export const editTodo = (id, updatedTodo) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`http://localhost:1326/todos/${id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updatedTodo),
			});
			if (!response.ok) {
				throw new Error("Ошибка при редактировании задачи");
			}

			const editedTodo = await response.json();

			dispatch({
				type: actionTypes.EDIT_TODO,
				payload: { id, todo: editedTodo },
			});
		} catch (error) {
			console.error("Ошибка при редактировании задачи:", error);
		}
	};
};

export const deleteTodo = (id) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`http://localhost:1326/todos/${id}`, {
				method: "DELETE",
			});
			if (!response.ok) {
				throw new Error("Ошибка при удалении задачи");
			}

			dispatch({
				type: actionTypes.DELETE_TODO,
				payload: id,
			});
		} catch (error) {
			console.error("Ошибка при удалении задачи:", error);
		}
	};
};
