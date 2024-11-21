export interface TaskFormInputs {
    task: string;
}

export interface TasksListProps {
    tasks: { id: number; task: string; }[];
    onDelete: (id: number) => void;
}

export interface TaskItemProps {
    task: string;
    id: number;
    onDelete: () => void;
}
