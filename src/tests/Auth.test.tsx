import {Provider} from "react-redux";
import {renderHook} from "@testing-library/react";
import {useAuth} from "../hooks/useAuth";
import {act} from "react";
import Cookies from "js-cookie";
import store from "../store/store";

describe('useAuth hook', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => <Provider store={store}>{children}</Provider>;

    it('logs in a user and sets a cookie', () => {
        const { result } = renderHook(() => useAuth(), { wrapper });
        const token = 'test-token';
        const email = 'test@example.com';

        act(() => {
            result.current.handleLogin(token, email);
        });

        expect(store.getState().auth.isAuthenticated).toBe(true);
        expect(store.getState().auth.email).toBe(email);
        expect(Cookies.get('token')).toBe(token);
    });

    it('logs out a user and removes the cookie', () => {
        const { result } = renderHook(() => useAuth(), { wrapper });

        act(() => {
            result.current.handleLogout();
        });

        expect(store.getState().auth.isAuthenticated).toBe(false);
        expect(store.getState().auth.email).toBe(null);
        expect(Cookies.get('token')).toBeUndefined();
    });

    it('returns initial authentication state', () => {
        const { result } = renderHook(() => useAuth(), { wrapper });

        expect(result.current.isAuthenticated).toBe(false);
        expect(result.current.email).toBe(null);
    });
});