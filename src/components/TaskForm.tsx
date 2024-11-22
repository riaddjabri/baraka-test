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
        <form onSubmit={handleSubmit(onSubmit)} className='flex '>
            <div className="mb-2">
                <input
                    type="text"
                    {...register('task', { required: 'Task is required' })}
                    className="border p-2 flex-grow"
                    placeholder="Add a new task"
                />
                {errors.task && <span className="text-red-500">{errors.task.message}</span>}
            </div>
            <div className="mb-2">
                <input
                    type="date"
                    {...register('dueDate', { required: 'Due date is required' })}
                    className="border p-2 ml-2"
                />
                {errors.dueDate && <span className="text-red-500">{errors.dueDate.message}</span>}
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 ml-2">Add</button>
        </form>
    );
};

export default TaskForm;