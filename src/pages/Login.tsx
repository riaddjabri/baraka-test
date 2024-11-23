import LoginForm from "../components/LoginForm";
import React from "react";
import MotivationQuote from "../components/MotivationQuote";

const Login = () => {
    return (
        <div className='w-full flex h-full'>
            <div className='w-1/2 bg-white md:flex items-center justify-center hidden'>
                <MotivationQuote />
            </div>
            <div className='md:w-1/2 w-full flex items-center justify-center px-4'>
                <LoginForm/>
            </div>

        </div>
    );
}

export default Login