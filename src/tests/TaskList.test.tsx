import {act} from 'react';
import {renderHook} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Task } from '../types/Tasks';
import {useSort} from "../hooks/useSort";
import {useFilter} from "../hooks/useFilter";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {useTasks} from "../hooks/useTasks";
import tasksReducer, { reorderTasks } from "../store/TasksSlice";
import authReducer from "../store/AuthSlice";

const store = configureStore({    reducer: {
        tasks: tasksReducer,
        auth: authReducer,
    },});

const tasks: Task[] = [
    { id: 1, task: 'Task 1', completed: false, dueDate: '2024-11-15' },
    { id: 2, task: 'Task 2', completed: true, dueDate: '2024-11-01' },
    { id: 3, task: 'Task 3', completed: true, dueDate: '2024-11-30' },
    { id: 4, task: 'Task 4', completed: false, dueDate: '2024-11-14' },
];

describe('TasksList Component', () => {

    it('reorders tasks', () => {
        const wrapper = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>;
        const { result } = renderHook(() => useTasks(), { wrapper });

        const initialTasks = [
            { id: 1, task: 'Task 1', completed: false, dueDate: '2024-11-15' },
            { id: 2, task: 'Task 2', completed: true, dueDate: '2024-11-01' },
        ];

        const updatedTasks = [
            { id: 2, task: 'Task 2', completed: true, dueDate: '2024-11-01' },
            { id: 1, task: 'Task 1', completed: false, dueDate: '2024-11-15' },
        ];

        store.dispatch(reorderTasks(initialTasks));
        expect(store.getState().tasks.tasks).toEqual(initialTasks);

        act(() => {
            result.current.handleReorderTasks(updatedTasks);
        });

        expect(store.getState().tasks.tasks).toEqual(updatedTasks);

    });
    it('returns tasks in ascending order when sortOrder is "asc"', () => {
        const { result } = renderHook(() => useSort(tasks));
        act(() => {
            result.current.setSortOrder('asc');
        });
        expect(result.current.sortedTasks).toEqual([
            tasks[1],
            tasks[3],
            tasks[0],
            tasks[2],
        ]);
    });

    it('returns tasks in descending order when sortOrder is "desc"', () => {
        const { result } = renderHook(() => useSort(tasks));
        act(() => {
            result.current.setSortOrder('desc');
        });
        expect(result.current.sortedTasks).toEqual([
            tasks[2],
            tasks[0],
            tasks[3],
            tasks[1],
        ]);
    });

    it('returns tasks in original order when sortOrder is "none"', () => {
        const { result } = renderHook(() => useSort(tasks));
        act(() => {
            result.current.setSortOrder('none');
        });
        expect(result.current.sortedTasks).toEqual(tasks);
    });

    it('handles empty tasks array', () => {
        const { result } = renderHook(() => useSort([]));
        expect(result.current.sortedTasks).toEqual([]);
    });
});

describe('useFilter hook', () => {
    it('returns all tasks when filter is "all"', () => {
        const { result } = renderHook(() => useFilter(tasks));
        act(() => {
            result.current.setFilter('all');
        });
        expect(result.current.filteredTasks).toEqual(tasks);
    });

    it('returns only active tasks when filter is "active"', () => {
        const { result } = renderHook(() => useFilter(tasks));
        act(() => {
            result.current.setFilter('active');
        });
        expect(result.current.filteredTasks).toEqual([
            tasks[0],
            tasks[3],
        ]);
    });

    it('returns only completed tasks when filter is "completed"', () => {
        const { result } = renderHook(() => useFilter(tasks));
        act(() => {
            result.current.setFilter('completed');
        });
        expect(result.current.filteredTasks).toEqual([
            tasks[1],
            tasks[2],
        ]);
    });

    it('handles empty tasks array', () => {
        const { result } = renderHook(() => useFilter([]));
        expect(result.current.filteredTasks).toEqual([]);
    });

});