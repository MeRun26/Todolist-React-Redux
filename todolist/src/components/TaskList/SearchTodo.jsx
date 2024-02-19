import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setSearchResults } from "../../actions";
import { selectSearchPhrase } from "../../selectors";

export const SearchTodo = () => {
	const dispatch = useDispatch();
	const searchQuery = useSelector(selectSearchPhrase);

	const handleSearchChange = (e) => {
		const { value } = e.target;
		console.log("Изменение поискового запроса:", value);
		dispatch(setSearchQuery(value));
	};

	useEffect(() => {
		console.log("Отправка запроса на сервер...");
		const fetchSearchResults = async () => {
			try {
				const response = await fetch(
					`http://localhost:1326/todos?q=${searchQuery}`,
				);
				console.log("Запрос отправлен успешно.");
				const data = await response.json();
				console.log("Полученные данные:", data);
				dispatch(setSearchResults(data));
			} catch (error) {
				console.error("Ошибка при отправке запроса на сервер:", error);
			}
		};

		fetchSearchResults();
	}, [searchQuery, dispatch]);

	return (
		<input
			placeholder="Поиск заданий..."
			value={searchQuery}
			onChange={handleSearchChange}
		/>
	);
};

export default SearchTodo;
