import {applyMiddleware,combineReducers,createStore} from 'redux';
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import photosReducer from "./photos";
import albumsReducer from "./albums";

const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = combineReducers({
    albums: albumsReducer,
    photos: photosReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk,logger))

export default store;