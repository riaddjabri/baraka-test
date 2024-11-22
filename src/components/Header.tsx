import {Link} from "react-router-dom";
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../types/Tasks';
import { useAuth } from '../hooks/useAuth';


const Header = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const { handleLogout } = useAuth();

    return (
        <header className='bg-black text-white px-4 py-6 flex flex-row justify-between w-full'>
            <div className='flex '>
                <Link to="/">Home</Link>
                {isAuthenticated && <Link to="/tasks">Tasks</Link>}
            </div>
                {isAuthenticated ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
        </header>
    );
}

export default Header