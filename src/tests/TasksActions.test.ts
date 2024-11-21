import store, { addTask, RootState, AppDispatch } from '../store/TasksSlice';

describe('Redux Store', () => {

    it('should have the correct initial state', () => {
        const state: RootState = store.getState();
        expect(state).toEqual({
            tasks: {
                tasks: [],
            },
        });
    });

    it('should add a task', () => {
        const dispatch: AppDispatch = store.dispatch;
        dispatch(addTask({ task: 'Task 1' }));
        dispatch(addTask({ task: 'Task 2' }));
        const state: RootState = store.getState();
        expect(state.tasks.tasks.length).toBe(2);
        expect(state.tasks.tasks[0].task).toBe('Task 1');
        expect(state.tasks.tasks[1].task).toBe('Task 2');
    });
});