import React from 'react';
import TaskItem from './TaskItem';
import {TasksListProps} from "../types/Tasks";


const TasksList: React.FC<TasksListProps> = ({ tasks }) => {
    return (
        <div>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task.task}
                />
            ))}
        </div>
    );
};

export default TasksList;