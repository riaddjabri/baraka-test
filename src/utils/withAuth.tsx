import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const withAuth = (WrappedComponent: React.FC) => {
    const AuthComponent: React.FC<
        React.ComponentProps<typeof WrappedComponent>
    > = (props) => {
        const { isAuthenticated, isLoading } = useAuth();

        if (isLoading) {
            return <div>Loading...</div>;
        }

        if (isAuthenticated) {
            return <WrappedComponent {...props} />;
        }
        return <Navigate to="/login" />;
    };

    return AuthComponent;
};

export default withAuth;