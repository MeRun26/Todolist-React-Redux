import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editTodo } from "../../hook/useTodo";
import { selectEditTodo } from "../../selectors";

const EditTodo = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const todos = useSelector(selectEditTodo);
	const editingTodo = todos.find((todo) => todo.id === parseInt(id));
	const navigate = useNavigate();

	const [updatedName, setUpdatedName] = useState(editingTodo?.name || "");

	const handleChange = (e) => {
		setUpdatedName(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedTodo = { ...editingTodo, name: updatedName };
		try {
			await dispatch(editTodo(updatedTodo.id, updatedTodo));
			console.log("Данные успешно сохранены");
			navigate("/");
		} catch (error) {
			console.error("Ошибка при сохранении данных:", error);
		}
	};

	const handleCancel = () => {
		navigate("/");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>{editingTodo && editingTodo.name}</h2>
			<input
				type="text"
				name="name"
				value={updatedName}
				onChange={handleChange}
			/>
			<button type="submit">Сохранить изменения</button>
			<button type="button" onClick={handleCancel}>
				Отмена
			</button>
		</form>
	);
};

export default EditTodo;
