export interface TaskFormInputs {
    task: string;
}

export interface TasksListProps {
    tasks: { id: number; task: string; completed: boolean; }[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
    onSortEnd: (newTasks: { id: number; task: string; completed: boolean }[]) => void;
}

export interface TaskItemProps {
    task: string;
    id: number;
    completed: boolean;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}