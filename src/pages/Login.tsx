import LoginForm from "../components/LoginForm";
import React from "react";
import MotivationQuote from "../components/MotivationQuote";

const Login = () => {
    return (
        <div className=' my-2 w-full flex h-full'>
            <div className='w-1/2 bg-white flex items-center justify-center'>
                <MotivationQuote />
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <LoginForm/>
            </div>

        </div>
    );
}

export default Login