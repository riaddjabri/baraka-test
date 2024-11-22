import { useState, useMemo } from 'react';
import { Task } from '../types/Tasks';

export const useFilter = (tasks: Task[]) => {
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {
            if (filter === 'active') return !task.completed;
            if (filter === 'completed') return task.completed;
            return true;
        });
    }, [tasks, filter]);

    return { filter, setFilter, filteredTasks };
};