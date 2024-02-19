import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlphabetSorting } from "../../actions";
import { selectIsAlphabetSorting } from "../../selectors";

export const SortTodo = () => {
	const dispatch = useDispatch();
	const isAlphabetSorting = useSelector(selectIsAlphabetSorting);

	const handleSortAlphabet = () => {
		console.log("Нажата кнопка сортировки");
		dispatch(setAlphabetSorting());
		console.log("Выполнено действие: сортировкa");
	};

	return (
		<>
			<button onClick={handleSortAlphabet}>
				{isAlphabetSorting
					? "Вернуть в исходное состояние"
					: "Сортировать по Алфавиту"}
			</button>
		</>
	);
};
