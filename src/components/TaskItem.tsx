import React from 'react';
import {TaskItemProps} from "../types/Tasks";

const TaskItem: React.FC<TaskItemProps> = ({ task, completed, onToggle, onDelete }) => {

    return (
        <div className="flex items-center justify-between p-2 border-b">
            <input type="checkbox" checked={completed} onChange={onToggle} className="mr-2"/>
            <div className="flex items-center">
                <span>{task}</span>
            </div>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
};

export default TaskItem;