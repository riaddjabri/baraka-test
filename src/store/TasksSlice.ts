import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Task {
    id: number;
    task: string;
    completed: boolean;
}

interface TasksState {
    tasks: Task[];
}

const loadState = (): TasksState => {
    try {
        const serializedState = localStorage.getItem('tasks');
        if (serializedState === null) {
            return { tasks: [] };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return { tasks: [] };
    }
};

const saveState = (state: TasksState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('tasks', serializedState);
    } catch (error) {
        console.error('Failed to save state:', error);
    }
};

const initialState: TasksState = loadState();

const TasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<{ task:string}>) => {
            const newTask: Task = {
                id: Date.now(),
                task: action.payload.task,
                completed: false,
            };
            state.tasks.push(newTask);
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            console.log(state.tasks)
        },
        toggleTask: (state, action: PayloadAction<number>) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
            console.log(task?.completed)
        },
        reset: () => initialState,

    },
});

export const { addTask, deleteTask, toggleTask, reset } = TasksSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const store = configureStore({
    reducer: {
        tasks: TasksSlice.reducer,
    },
});

store.subscribe(() => {
    saveState(store.getState().tasks);
});

export default store;
