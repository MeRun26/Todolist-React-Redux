import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTodos } from "../../selectors";
import { DeleteTodo } from "../TaskPage";

export const TodoPage = () => {
	const { id } = useParams();
	const todos = useSelector(selectTodos);
	const selectedTodo = todos.find((todo) => todo.id === parseInt(id));
	const navigate = useNavigate();

	const handleEdit = () => {
		navigate(`/todos/${id}/edit`);
	};

	const goBack = () => {
		navigate("/");
	};

	return (
		<>
			<h2>{"Задание № - " + id}</h2>
			{selectedTodo && <h2>{selectedTodo.name}</h2>}
			<button type="button" onClick={handleEdit}>
				Изменить задачу
			</button>
			<DeleteTodo />
			<button type="button" onClick={goBack}>
				🡰
			</button>
		</>
	);
};
