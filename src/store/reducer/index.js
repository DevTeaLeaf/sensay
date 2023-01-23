import { combineReducers } from "redux";
import { burgerReducer } from "./BurgerReducer";
import { langReducer } from "./LangReducer";

export const rootReducer = combineReducers ({
    burger: burgerReducer,
    lang: langReducer
})