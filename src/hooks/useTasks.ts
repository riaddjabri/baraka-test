import { useDispatch, useSelector } from 'react-redux';
import { RootState, Task } from '../types/Tasks';
import { addTask, deleteTask, toggleTask, reorderTasks } from '../store/TasksSlice';

export const useTasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    const handleAddTask = (task: string, dueDate: string) => {
        dispatch(addTask({ task, dueDate }));
    };

    const handleDeleteTask = (taskId: number) => {
        dispatch(deleteTask(taskId));
    };

    const handleToggleTask = (taskId: number) => {
        dispatch(toggleTask(taskId));
    };

    const handleReorderTasks = (updatedTasks: Task[]) => {
        dispatch(reorderTasks(updatedTasks));
    };

    return { tasks, handleAddTask, handleDeleteTask, handleToggleTask, handleReorderTasks };
};