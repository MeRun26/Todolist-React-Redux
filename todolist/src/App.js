import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodoList } from "./components/TaskList";
import { TodoPage } from "./components/TaskPage";
import EditTodo from "./components/TaskEdit/EditTodo";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TodoList />} />
				<Route path="/todos/:id" element={<TodoPage />} />
				<Route path={`/todos/:id/:edit`} element={<EditTodo />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
