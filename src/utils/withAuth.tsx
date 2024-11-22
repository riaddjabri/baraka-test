import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const withAuth = (WrappedComponent: React.FC) => {
    const AuthComponent: React.FC = (props: any) => {
        const { isAuthenticated } = useAuth();

        if (isAuthenticated) {
            return <WrappedComponent {...props} />;
        }
        return <Navigate to="/" />;
    };

    return AuthComponent;
};

export default withAuth;