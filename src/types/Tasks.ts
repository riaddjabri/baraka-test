export interface TaskFormInputs {
    task: string;
}

export interface TasksListProps {
    tasks: { id: number; task: string; }[];
}

export interface TaskItemProps {
    task: string;
}
