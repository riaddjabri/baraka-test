import React from 'react';
import TaskItem from './TaskItem';
import {TasksListProps} from "../types/Tasks";


const TasksList: React.FC<TasksListProps> = ({ tasks, onDelete, onToggle }) => {
    return (
        <div>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    id={task.id}
                    task={task.task}
                    completed={task.completed}
                    onDelete={() => onDelete(task.id)}
                    onToggle={() => onToggle(task.id)}
                />
            ))}
        </div>
    );
};

export default TasksList;