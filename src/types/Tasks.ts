import store from "../store/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface Task {
    id: number;
    task: string;
    completed: boolean;
    dueDate: string;
}

export interface TasksState {
    tasks: Task[];
}

export type TaskFormInputs = Partial<Omit<Task, 'id' | 'completed'>>;

export interface TasksListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
    onSortEnd: (newTasks: Task[]) => void;
}

export interface TaskItemProps {
    task: string;
    id: number;
    completed: boolean;
    dueDate: string;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}