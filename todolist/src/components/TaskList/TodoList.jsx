import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	selectIsLoading,
	selectSearchPhrase,
	selectIsAlphabetSorting,
	selectFilteredAndSortedTodos,
} from "../../selectors";
import { loadTodo } from "../../hook/useTodo";
import { SearchTodo, SortTodo } from "../TaskList";
import { Link } from "react-router-dom";

export const TodoList = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(selectIsLoading);
	const todos = useSelector(selectFilteredAndSortedTodos);
	const searchPhrase = useSelector(selectSearchPhrase);
	const isAlphabetSorting = useSelector(selectIsAlphabetSorting);

	useEffect(() => {
		dispatch(loadTodo(searchPhrase, isAlphabetSorting));
	}, [dispatch, searchPhrase, isAlphabetSorting]);

	const truncateText = (text, maxLength) => {
		if (text.length > maxLength) {
			return text.substring(0, maxLength - 3) + "...";
		}
		return text;
	};

	return (
		<div>
			<h1>Todolist На Новый Год!!!</h1>
			<SearchTodo />
			<SortTodo />
			{isLoading ? (
				<div>ЗАГРУЗКА...</div>
			) : (
				<div>
					{todos.map((todo) => (
						<div key={todo.id}>
							<Link to={`/todos/${todo.id}`}>
								{truncateText(todo.name, 30)}
							</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
