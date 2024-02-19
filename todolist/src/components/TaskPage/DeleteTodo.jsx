import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../hook/useTodo";
import { useParams, useNavigate } from "react-router-dom";

export const DeleteTodo = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	const navigate = useNavigate();

	const handleDelete = () => {
		dispatch(deleteTodo(id));
		navigate("/");
	};

	return (
		<button type="button" onClick={handleDelete}>
			Удалить задачу
		</button>
	);
};
