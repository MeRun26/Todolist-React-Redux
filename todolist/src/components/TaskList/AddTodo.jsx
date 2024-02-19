import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../hook/useTodo";
import { selectSearchResults } from "../../selectors";

export const AddTodo = () => {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState("");
	const todos = useSelector(selectSearchResults);

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputValue.trim()) {
			return;
		}
		const newTodo = {
			id: todos.length + 1,
			name: inputValue,
		};
		dispatch(addTodo(newTodo));
		setInputValue("");
	};

	const handleCancel = () => {
		setInputValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				name="name"
				value={inputValue}
				onChange={handleChange}
			/>
			<button type="submit">Добавить задачу</button>
			<button type="button" onClick={handleCancel}>
				Отменить
			</button>
		</form>
	);
};
