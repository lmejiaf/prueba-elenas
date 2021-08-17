import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas";
import { authReducer, clientsReducer } from "./reducers";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    authReducer,
    clientsReducer,
  }),
  applyMiddleware(sagaMiddleware)
);
export default store;
sagaMiddleware.run(sagas);
