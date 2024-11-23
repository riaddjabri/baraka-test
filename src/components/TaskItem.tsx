import {TaskItemProps} from "../types/Tasks";
import {useSortable} from "@dnd-kit/sortable";
import {Switch, TableCell, TableRow} from "@mui/material";
import DragHandleIcon from '@mui/icons-material/DragHandle';
import DeleteIcon from '@mui/icons-material/Delete';
import useIsMobile from "../hooks/useIsMobile";

const SortableItem: React.FC<TaskItemProps> = ({ id, task, completed, dueDate, onToggle, onDelete }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        transition: transition || undefined,
    };
    return (
        <TableRow ref={setNodeRef} style={style} data-testid={`task-item-${id}`}>
            {!useIsMobile() &&
                <TableCell {...attributes} {...listeners} className='w-10 hidden md:block'>
                    <DragHandleIcon/>
                </TableCell>
            }
            <TableCell>{task}</TableCell>
            <TableCell align="center">
                <Switch checked={completed} onChange={() => onToggle(id)} />
            </TableCell>
            <TableCell align="center">{dueDate}</TableCell>
            <TableCell align="center">
                <button onClick={() => onDelete(id)}>
                    <DeleteIcon />
                </button>
            </TableCell>
        </TableRow>
    );
};

export default SortableItem;