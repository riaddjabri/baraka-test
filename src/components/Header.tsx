import {Link} from "react-router-dom";
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../types/Tasks';
import { useAuth } from '../hooks/useAuth';
import { ReactComponent as Logo} from '../assets/logo.svg';


const Header = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const { handleLogout } = useAuth();

    return (
        <header className='bg-black text-white p-6 flex flex-row justify-between w-full items-center fixed top-0 left-0 z-10' aria-label='Header'>
            <div className='flex justify-center items-center gap-4'>
                <Link to="/" aria-label='Home'>
                    <Logo/>
                </Link>
                {isAuthenticated && <Link to="/tasks">Tasks</Link>}
            </div>
            <div className='rounded-full bg-white text-black px-4 py-2'>
                {isAuthenticated ? (
                    <button onClick={handleLogout} aria-label='Logout'>Logout</button>
                ) : (
                    <Link to="/login" aria-label='Sign In'>Sign In</Link>
                )}
            </div>
        </header>
    );
}

export default Header