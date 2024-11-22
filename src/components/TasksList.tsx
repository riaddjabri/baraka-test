import React, { useState, useMemo } from 'react';
import { TasksListProps } from '../types/Tasks';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
    restrictToVerticalAxis
} from '@dnd-kit/modifiers';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { useSensor, useSensors, PointerSensor, KeyboardSensor } from '@dnd-kit/core';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination,
    ToggleButton, ToggleButtonGroup, Paper
} from '@mui/material';
import SortableItem from "./TaskItem";


const TasksList: React.FC<TasksListProps> = ({ tasks, onDelete, onToggle, onSortEnd }) => {
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const filteredTasks = useMemo(() => {
        return tasks.filter(task => {
            if (filter === 'active') return !task.completed;
            if (filter === 'completed') return task.completed;
            return true;
        });
    }, [tasks, filter]);

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: any) => {
        const { active, over } = event;

        if (active.id !== over.id) {
            const oldIndex = tasks.findIndex(task => task.id === active.id);
            const newIndex = tasks.findIndex(task => task.id === over.id);
            const newTasks = arrayMove(tasks, oldIndex, newIndex);
            onSortEnd(newTasks);
        }
    };

    const handleChangeFilter = (event: React.MouseEvent<HTMLElement>, newFilter: 'all' | 'active' | 'completed') => {
        if (newFilter !== null) {
            setFilter(newFilter);
        }
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Paper>
            <div className="flex flex-col justify-between mb-4">
                <ToggleButtonGroup
                    color="primary"
                    value={filter}
                    exclusive
                    onChange={handleChangeFilter}
                    aria-label="Tasks status filter"
                >
                    <ToggleButton value="all">All</ToggleButton>
                    <ToggleButton value="active">Active</ToggleButton>
                    <ToggleButton value="completed">Completed</ToggleButton>
                </ToggleButtonGroup>
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
                                    {filteredTasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(task => (
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
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredTasks.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </Paper>
    );
};

export default TasksList;