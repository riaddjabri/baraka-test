import TaskForm from "../components/TaskForm";
import TasksList from "../components/TasksList";
import React from "react";
import {useTasks} from "../hooks/useTasks";
import { useSelector } from "react-redux";
import { RootState } from "../types/Tasks";
import MotivationQuote from "../components/MotivationQuote";
import Card from "../components/Card";

const Tasks: React.FC = () => {
    const { tasks, handleAddTask, handleDeleteTask, handleToggleTask, handleReorderTasks } = useTasks();
    const username = useSelector((state: RootState) => state.auth.username);

    return (
        <div className='bg-white w-full h-full p-4'>
            <div className='text-center'>
                <h1>Welcome, {username}!</h1>
                <MotivationQuote />
            </div>
            <div className='mt-4 grid grid-cols-3 gap-4'>
                    <Card number={tasks.length} label='Tasks' />
                    <Card number={tasks.filter((task) => task.completed ).length} label='Tasks Completed' />
                    <Card number={tasks.filter((task) => new Date(task.dueDate) < new Date()).length} label='Tasks Outdated' />
            </div>
            <TaskForm addTask={handleAddTask} />
            <TasksList tasks={tasks} onDelete={handleDeleteTask} onToggle={handleToggleTask} onSortEnd={handleReorderTasks} />
        </div>
    );
};

export default Tasks;