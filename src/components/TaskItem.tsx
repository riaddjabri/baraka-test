import React from 'react';
import {TaskItemProps} from "../types/Tasks";

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {

    return (
        <div className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center">
                <span>{task}</span>
            </div>
        </div>
    );
};

export default TaskItem;