import React from 'react';
import { useForm } from 'react-hook-form';
import clsx from "clsx";
import users from '../mockData/users.json';
import {useAuth} from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';


interface LoginFormInputs {
    email: string;
    password: string;
    apiError?: string;
}

const LoginForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isDirty, isValid }, setError, clearErrors } = useForm<LoginFormInputs>();
    const { handleLogin } = useAuth();
    const navigate = useNavigate();


    const onSubmit = (data: LoginFormInputs) => {
        const user = users.find(user => user.email === data.email && user.password === data.password);
        if (user) {
            handleLogin(user.token, user.email);
            navigate('/tasks');
        } else {
            setError('apiError', { message: 'Invalid email or password' });
        }
    };

    return (
        <div
            className="bg-secondary-grey flex flex-col text-white items-center justify-center w-full h-max px-3 md:px-8 py-6 gap-3 rounded md:max-w-md">
            <h1 className="text-2xl font-bold mb-4">Login to your account</h1>
            <form onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col w-full gap-3 text-black max-w-80  items-center justify-center">
                <div className={'flex flex-col gap-4 my-8 w-full'}>
                    <input
                        type="text"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email address'
                            },
                            onChange: () => clearErrors('apiError')
                        })}
                        className={clsx("order outline-none px-4 py-2.5 rounded-large w-full", {
                            "border-red-500 border-solid border-2": errors.email
                        })}
                        placeholder="Username"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    <input
                        type="password"
                        {...register('password', {
                            required: 'Password is required',
                            onChange: () => clearErrors('apiError')
                        })}
                        className={clsx("order outline-none px-4 py-2.5 rounded-large w-full", {
                            "border-red-500 border-solid border-2": errors.password
                        })}

                        placeholder="Password"
                    />
                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                </div>
                {errors.apiError && <span className="text-red-500">{errors.apiError.message}</span>}
                <button
                    type="submit"
                    className={clsx("p-2 rounded-full text-base w-full",
                        {
                            "bg-disabled text-[#ffffff80]": !isDirty || !isValid,
                            "bg-white text-secondary-black": isValid && isDirty
                        },
                    )}
                    disabled={!isDirty || !isValid}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;