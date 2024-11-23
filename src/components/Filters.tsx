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
        <div className='flex flex-col gap-2'>
            <h2 className='font-bold'>Filter by status:</h2>
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
        </div>
    );
};

export default Filters;