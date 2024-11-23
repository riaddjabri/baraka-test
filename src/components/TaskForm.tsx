import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TaskFormInputs } from '../types/Tasks';

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
                    <input
                        type="text"
                        {...register('task', {required: 'Task is required'})}
                        className="border p-2 flex-grow"
                        placeholder="Add a new task"
                    />
                    {errors.task && <span className="text-red-500">{errors.task.message}</span>}
                </div>
                <div className="flex flex-col">
                    <input
                        type="date"
                        {...register('dueDate', {required: 'Due date is required'})}
                        className="border p-2 ml-2"
                    />
                    {errors.dueDate && <span className="text-red-500">{errors.dueDate.message}</span>}
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 ml-2">Add</button>
            </form>
        </div>
    );
};

export default TaskForm;