import React from 'react';
import { TasksListProps } from '../types/Tasks';
import {DndContext, closestCenter, TouchSensor, MouseSensor, DragEndEvent} from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSensor, useSensors, KeyboardSensor } from '@dnd-kit/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SortableItem from './TaskItem';
import { useFilter } from '../hooks/useFilter';
import { useSort } from '../hooks/useSort';
import Filters from "./Filters";
import Sort from './Sort';

const TasksList: React.FC<TasksListProps> = ({ tasks, onDelete, onToggle, onSortEnd }) => {
    const { filter, setFilter, filteredTasks } = useFilter(tasks);
    const { sortOrder, setSortOrder, sortedTasks } = useSort(filteredTasks);

    const sensors = useSensors(
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 0,
                tolerance: 0,
            },
        }),
        useSensor(MouseSensor, {
            activationConstraint: {
                distance: 5,
                delay: 50,
                tolerance: 10,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = tasks.findIndex(task => task.id === active.id);
            const newIndex = tasks.findIndex(task => task.id === over.id);
            const newTasks = arrayMove(tasks, oldIndex, newIndex);
            onSortEnd(newTasks);
        }
    };

    return (
        <Paper>
            <div className="flex flex-col justify-between mb-4">
                <div className='flex flex-col md:flex-row justify-between mt-8'>
                    <Filters filter={filter} setFilter={setFilter} />
                    <Sort sortOrder={sortOrder} setSortOrder={setSortOrder} />
                </div>
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd} modifiers={[restrictToVerticalAxis]}>
                    <SortableContext items={tasks.map(task => task.id)} strategy={verticalListSortingStrategy}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell>Task</TableCell>
                                        <TableCell align="center">Completed</TableCell>
                                        <TableCell align="center">Due date</TableCell>
                                        <TableCell align="center">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {sortedTasks.map(task => (
                                        <SortableItem
                                            key={task.id}
                                            id={task.id}
                                            task={task.task}
                                            completed={task.completed}
                                            dueDate={task.dueDate}
                                            onToggle={onToggle}
                                            onDelete={onDelete}
                                        />
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </SortableContext>
                </DndContext>
            </div>
        </Paper>
    );
};

export default TasksList;