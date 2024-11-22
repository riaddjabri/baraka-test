import { useState, useMemo } from 'react';
import { Task } from '../types/Tasks';

export const useSort = (tasks: Task[]) => {
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none');

    const sortedTasks = useMemo(() => {
        if (sortOrder === 'asc') {
            return [...tasks].sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
        } else if (sortOrder === 'desc') {
            return [...tasks].sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());
        } else {
            return tasks;
        }
    }, [tasks, sortOrder]);

    return {sortOrder, setSortOrder, sortedTasks};
};