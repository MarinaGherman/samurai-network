import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
})


export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type RootActionsType = any//сюда нужно добавлять свои типизации акшенов через или
export type AppThunkDispatch = ThunkDispatch<AppStoreType, null, RootActionsType>;
export type AppStoreType = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;
export const useAppDispatch: () => AppThunkDispatch = useDispatch;

export default store
// @ts-ignore
window.store = store