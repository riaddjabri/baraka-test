import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

interface FiltersProps {
    filter: 'all' | 'active' | 'completed';
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
}

const Filters: React.FC<FiltersProps> = ({ filter, setFilter }) => {
    const handleChangeFilter = (event: React.MouseEvent<HTMLElement>, newFilter: 'all' | 'active' | 'completed') => {
        if (newFilter !== null) {
            setFilter(newFilter);
        }
    };

    return (
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
    );
};

export default Filters;