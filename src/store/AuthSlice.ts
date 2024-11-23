import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import users from '../mockData/users.json';
import Cookies from 'js-cookie';

interface AuthState {
    isAuthenticated: boolean;
    email: string | null;
    username: string | null;
    isLoading: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
    email: null,
    username: null,
    isLoading: true,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ token: string; email: string }>) => {
            state.isAuthenticated = true;
            state.email = action.payload.email;
            state.isLoading = false;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.email = null;
            state.isLoading = false;
        },
        checkAuth: (state) => {
            state.isLoading = true;
            const token = Cookies.get('token');
            if (token) {
                const user = users.find(user => user.token === token);
                if (user) {
                    state.isAuthenticated = true;
                    state.email = user.email;
                    state.username = user.username;
                }
            }
            state.isLoading = false;
        },
    },
});

export const { login, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;