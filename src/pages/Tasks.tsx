import TaskForm from "../components/TaskForm";
import TasksList from "../components/TasksList";
import {useSelector} from "react-redux";
import {RootState} from "../store/TasksSlice";
import React from "react";

const Tasks: React.FC = () => {
    const tasks = useSelector((state: RootState) => state.tasks.tasks);
    return (
        <div>
            <TaskForm />
            <TasksList tasks={tasks} />
        </div>
    );
};

export default Tasks