import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {loginReducer} from './loginReducer';
import {registrationReducer} from './registrationReducer';
import {profileReducer} from './profileReducer';
import {passwordReducer} from './passwordReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    profile: profileReducer,
    password: passwordReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

type AppActionType = any;
export type AppRootStateType = ReturnType<typeof store.getState>;
export type  AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppActionType>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
