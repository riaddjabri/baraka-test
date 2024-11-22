import React, {useState} from 'react';
import {TasksListProps} from "../types/Tasks";
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination,
    ToggleButton, ToggleButtonGroup, Paper, Switch
} from '@mui/material';

const TasksList: React.FC<TasksListProps> = ({ tasks, onDelete, onToggle }) => {
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

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

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Task</TableCell>
                                <TableCell align="center">Completed</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredTasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(task => (
                                <TableRow key={task.id}>
                                    <TableCell>{task.task}</TableCell>
                                    <TableCell align="center">
                                        <Switch checked={task.completed} onChange={() => onToggle(task.id)} />
                                    </TableCell>
                                    <TableCell align="center">
                                        <button onClick={() => onDelete(task.id)}>Delete</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
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