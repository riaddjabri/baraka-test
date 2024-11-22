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
        <ToggleButtonGroup
            color="primary"
            value={sortOrder}
            exclusive
            onChange={handleSortOrderChange}
            aria-label="Sort order"
        >
            <ToggleButton value="asc">Asc</ToggleButton>
            <ToggleButton value="desc">Desc</ToggleButton>
            <ToggleButton value="none">None</ToggleButton>
        </ToggleButtonGroup>
    );
};

export default Sort;