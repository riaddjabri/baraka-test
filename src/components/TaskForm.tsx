import {SubmitHandler, useForm} from "react-hook-form";
import {AppDispatch, TaskFormInputs} from "../types/Tasks";
import {addTask} from "../store/TasksSlice";
import {useDispatch} from "react-redux";


const TaskForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<TaskFormInputs>();
    const dispatch: AppDispatch = useDispatch();

    const onSubmit: SubmitHandler<TaskFormInputs> = (data) => {
        if (data.task && data.dueDate) {
            dispatch(addTask(data as  { task: string; dueDate: string }));
            reset();
        } else {
            console.error('Task is required');
        }    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex mb-4">
            <div className="mb-2">
                <input
                    type="text"
                    {...register('task', {required: 'Task is required'})}
                    className="border p-2 flex-grow"
                    placeholder="Add a new task"
                />
                {errors.task && <span className="text-red-500">{errors.task.message}</span>}
            </div>
            <div className="mb-2">

                <input
                    type="date"
                    {...register('dueDate', {required: 'Due date is required'})}
                    className="border p-2 ml-2"
                />
                {errors.dueDate && <span className="text-red-500">{errors.dueDate.message}</span>}
            </div>


            <button type="submit" className="bg-blue-500 text-white p-2 ml-2">Add</button>
        </form>
    );
}

export default TaskForm