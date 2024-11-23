import {addTask, toggleTask, deleteTask, reset} from '../store/TasksSlice';
import store from '../store/store';
import {AppDispatch, RootState} from "../types/Tasks";

describe('Items Actions test', () => {
    beforeEach(() => {
        // Reset the store before each test
        store.dispatch(reset());
    });

    it('should have the correct initial state', () => {
        const state: RootState = store.getState();
        expect(state).toEqual({
            tasks: {
                tasks: [],
            },
            auth: {
                isAuthenticated: false,
                email: null,
                username: null,
                isLoading: true,
    },
        });
    });

    it('should add a task', () => {
        const dispatch: AppDispatch = store.dispatch;
        dispatch(addTask({ task: 'Task 1', dueDate: '2024-12-31' }));
        dispatch(addTask({ task: 'Task 2', dueDate: '2025-01-15' }));
        const state: RootState = store.getState();
        expect(state.tasks.tasks.length).toBe(2);
        expect(state.tasks.tasks[0].task).toBe('Task 1');
        expect(state.tasks.tasks[1].task).toBe('Task 2');
    });

    it('should toggle a task correctly', () => {
        const dispatch: AppDispatch = store.dispatch;
        dispatch(addTask({ task: 'Task 1', dueDate: '2024-12-31' }));
        let state: RootState = store.getState();
        const taskId = state.tasks.tasks[0].id;
        expect(state.tasks.tasks[0].completed).toBe(false);
        dispatch(toggleTask(taskId));
        // reset state after modification
        state = store.getState();
        expect(state.tasks.tasks[0].completed).toBe(true);
    });

    it('should delete a task correctly', () => {
        const dispatch: AppDispatch = store.dispatch;
        dispatch(addTask({ task: 'Task 1', dueDate: '2023-12-31' }));
        const taskId = store.getState().tasks.tasks[0].id;
        dispatch(deleteTask(taskId));
        const state: RootState = store.getState();
        expect(state.tasks.tasks.length).toBe(0);
    });

});