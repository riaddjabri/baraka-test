import {TaskItemProps} from "../types/Tasks";
import {useSortable} from "@dnd-kit/sortable";
import {Switch, TableCell, TableRow} from "@mui/material";

const SortableItem: React.FC<TaskItemProps> = ({ id, task, completed, onToggle, onDelete }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition: transition || undefined,
    };
    return (
        <TableRow ref={setNodeRef} style={style}>
            <TableCell {...attributes} {...listeners}>
                Drag
            </TableCell>
            <TableCell>{task}</TableCell>
            <TableCell align="center">
                <Switch checked={completed} onChange={() => onToggle(id)} />
            </TableCell>
            <TableCell align="center">
                <button onClick={() => onDelete(id)}>Delete</button>
            </TableCell>
        </TableRow>
    );
};

export default SortableItem;