import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './TasksSlice';
import authReducer from './AuthSlice';
import {RootState} from "../types/Tasks";

const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state.tasks);
        localStorage.setItem('tasks', serializedState);
    } catch (error) {
        console.error('Failed to save state:', error);
    }
};

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        auth: authReducer,
    },
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
