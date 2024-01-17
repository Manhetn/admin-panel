import { combineReducers, configureStore } from '@reduxjs/toolkit';
import usersReducer from './slice/usersSlice';

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
