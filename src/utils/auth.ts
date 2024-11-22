import mockUsers from '../mockData/users.json';

interface User {
    email: string;
    password: string;
    token: string;
}
export const authenticateUser = ({email, password}: User) => {
    const user = mockUsers.find(
        (user: User) => user.email === email && user.password === password);

    if (user) {
        return { email };
    }
    return null;
};

export const verifyToken = (token: string) => {
    const user = mockUsers.find((user: User) => user.token === token);
    return user !== undefined;
};
