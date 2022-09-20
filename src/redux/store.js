// import { configureStore } from '@reduxjs/toolkit'

// import todosReducer from './features/todos/todosSlice'
// import filtersReducer from './features/filters/filtersSlice'

// const store = configureStore({
//   reducer: {
//     // Define a top-level state field named `todos`, handled by `todosReducer`
//     todos: todosReducer,
//     filters: filtersReducer
//   }
// })

// export default store


import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import state from "./state";
import thunk from "redux-thunk";

export default createStore(reducers, state, applyMiddleware(thunk));
