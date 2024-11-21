import {SubmitHandler, useForm} from "react-hook-form";
import {TaskFormInputs} from "../types/Tasks";
import {addTask, AppDispatch} from "../store/TasksSlice";
import {useDispatch} from "react-redux";

const TaskForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm<TaskFormInputs>();
    const dispatch: AppDispatch = useDispatch();

    const onSubmit: SubmitHandler<TaskFormInputs> = (data) => {
        dispatch(addTask(data));
        reset();
    };

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

            <button type="submit" className="bg-blue-500 text-white p-2 ml-2">Add</button>
        </form>
    );
}

export default TaskForm