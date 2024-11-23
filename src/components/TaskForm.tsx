import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TaskFormInputs } from '../types/Tasks';
import {Alert, AlertTitle} from "@mui/material";

interface TaskFormProps {
    addTask: (task: string, dueDate: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TaskFormInputs>();

    const onSubmit: SubmitHandler<TaskFormInputs> = (data) => {
        addTask(data.task!, data.dueDate!);
        reset();
    };

    return (
        <div className='mt-4'>
            <h2 className='font-bold'>Add a new task:</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col md:flex-row'>
                <div className="flex flex-col w-full">
                    <label htmlFor="task-input">Task</label>
                    <input
                        id="task-input"
                        type="text"
                        {...register('task', {required: 'Task is required'})}
                        className="border p-2 flex-grow"
                        placeholder="Add a new task"
                        aria-required="true"
                    />
                </div>
                <div className="flex flex-col relative">
                    <label htmlFor="due-date-input">Due Date</label>
                    <input
                        id="due-date-input"
                        type="date"
                        {...register('dueDate', {
                            required: 'Due date is required',
                            validate: value => new Date(value || '') > new Date() || 'Due date must be in the future'
                        })}
                        className="border p-2 ml-2"
                        aria-required="true"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 ml-2">Add</button>
            </form>
            {errors && Object.keys(errors).length > 0 &&
                <Alert severity="error" className='mt-4'>
                    <AlertTitle>Error</AlertTitle>
                    {errors.task && <span className="text-red-500">{errors.task.message}</span>}
                    {errors.dueDate && <span className="text-red-500">{errors.dueDate.message}</span>}
                </Alert>
            }
        </div>
    );
};

export default TaskForm;