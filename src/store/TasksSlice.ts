import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task, TasksState } from '../types/Tasks';

const loadState = (): TasksState => {
    try {
        const serializedState = localStorage.getItem('tasks');
        return serializedState ? JSON.parse(serializedState) : { tasks: [] };
    } catch (err) {
        console.error('Failed to load state:', err);
        return { tasks: [] };
    }
};

const initialState: TasksState = loadState();

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ task: string; dueDate: string }>) => {
            const newTask: Task = {
                id: Date.now(),
                task: action.payload.task,
                completed: false,
                dueDate: action.payload.dueDate,
            };
            state.tasks.push(newTask);
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTask: (state, action: PayloadAction<number>) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        reorderTasks: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload;
        },
        reset: () => initialState,
    },
});

export const { addTask, deleteTask, toggleTask, reset, reorderTasks } = tasksSlice.actions;
export default tasksSlice.reducer;