import TaskForm from "../components/TaskForm";
import TasksList from "../components/TasksList";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, RootState, toggleTask, reorderTasks } from "../store/TasksSlice";
import React from "react";

const Tasks: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    const handleDelete = (id: number) => {
        dispatch(deleteTask(id));
    };

    const handleToggle = (id: number) => {
        dispatch(toggleTask(id));
    };

    const handleSortEnd = (newTasks: { id: number; task: string; completed: boolean; }[]) => {
        dispatch(reorderTasks(newTasks));
    };

    return (
        <div>
            <TaskForm />
            <TasksList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} onSortEnd={handleSortEnd} />
        </div>
    );
};

export default Tasks;