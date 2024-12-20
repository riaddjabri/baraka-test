import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

interface SortProps {
    sortOrder: 'asc' | 'desc' | 'none';
    setSortOrder: (sortOrder: 'asc' | 'desc' | 'none') => void;
}

const Sort: React.FC<SortProps> = ({ sortOrder, setSortOrder }) => {
    const handleSortOrderChange = (event: React.MouseEvent<HTMLElement>, newSortOrder: 'asc' | 'desc' | 'none') => {
        if (newSortOrder !== null) {
            setSortOrder(newSortOrder);
        }
    };

    return (
        <div className='flex gap-2 flex-col'>
            <h2 className='font-bold'>Sort by date:</h2>
            <ToggleButtonGroup
                color="primary"
                value={sortOrder}
                exclusive
                onChange={handleSortOrderChange}
                aria-label="Sort order by date"
            >
                <ToggleButton value="asc" aria-label="Asc order">Asc</ToggleButton>
                <ToggleButton value="desc" aria-label="Desc order">Desc</ToggleButton>
                <ToggleButton value="none" aria-label="Sort by creation date">None</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default Sort;