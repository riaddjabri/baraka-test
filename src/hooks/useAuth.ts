import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types/Tasks';
import { login, logout } from '../store/AuthSlice';
import Cookies from 'js-cookie';

export const useAuth = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, email, isLoading } = useSelector((state: RootState) => state.auth);

    const handleLogin = (token: string, email: string) => {
        dispatch(login({ token, email }));
        Cookies.set('token', token);
    };

    const handleLogout = () => {
        dispatch(logout());
        Cookies.remove('token');
    };

    return { isAuthenticated, email, isLoading, handleLogin, handleLogout };
};