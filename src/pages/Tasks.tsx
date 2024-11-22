import TaskForm from "../components/TaskForm";
import TasksList from "../components/TasksList";
import React from "react";
import {useTasks} from "../hooks/useTasks";
import { useSelector } from "react-redux";
import { RootState } from "../types/Tasks";

const Tasks: React.FC = () => {
    const { tasks, handleAddTask, handleDeleteTask, handleToggleTask, handleReorderTasks } = useTasks();
    const username = useSelector((state: RootState) => state.auth.username);

    return (
        <div>
            <h1>Welcome, {username}!</h1>

            <TaskForm addTask={handleAddTask} />
            <TasksList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} onSortEnd={handleReorderTasks} />
        </div>
    );
};

export default Tasks;