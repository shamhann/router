import {applyMiddleware,combineReducers,createStore} from 'redux';
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import cardsReducer from "./cards";
import modalReducer from "./modal";

const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = combineReducers({
    cards: cardsReducer,
    modal: modalReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk,logger))
export default store;