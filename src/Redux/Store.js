import {applyMiddleware, combineReducers, createStore} from "redux";
import MenuReducer from "./menu-reducer";
import thunkMiddleware from 'redux-thunk';
import AboutReducer from "./about-reducer";

let reducers = combineReducers({
        Menumodal: MenuReducer,
        AboutState: AboutReducer,
    }
)

let store = createStore(reducers,applyMiddleware(thunkMiddleware));
window.store=store;
export default store;
