import TaskForm from "../components/TaskForm";
import TasksList from "../components/TasksList";
import {useDispatch, useSelector} from "react-redux";
import {deleteTask, RootState, toggleTask} from "../store/TasksSlice";
import React from "react";

const Tasks: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    const handleDelete = (id: number) => {
        dispatch(deleteTask(id));
    };

    const handleToggle = (id: number) => {
        dispatch(toggleTask(id));
    }

    return (
        <div>
            <TaskForm />
            <TasksList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle}/>
        </div>
    );
};

export default Tasks