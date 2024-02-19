import { thunk } from "redux-thunk";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { searchReducer, sortReducer, todosReducer } from "./reducers";

const rootReducer = combineReducers({
	todos: todosReducer,
	search: searchReducer,
	sort: sortReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk)),
);

export default store;
