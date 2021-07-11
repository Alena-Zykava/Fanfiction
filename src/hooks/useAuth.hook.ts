import { useState, useCallback, useEffect } from 'react';

const storageName = 'userData';

export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userId, setUserId] = useState(null);
    const [userRoles, setUserRoles] = useState<string[]>([]);

    const login = useCallback((jwtToken, id, name, roles) => {
        setToken(jwtToken);
        setUserId(id);
        setUserName(name);
        setUserRoles(roles);

        localStorage.setItem(storageName, JSON.stringify({
            userId: id,
            token: jwtToken,
            userName: name,
            userRoles: roles
        }));
    }, []);


    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
        setUserName(null);
        setUserRoles([]);
        localStorage.removeItem(storageName);
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName) || '{}');

        if (data && data.token) {
            login(data.token, data.userId, data.userName, data.userRoles);
        };

    }, [login])


    return { login, logout, token, userId, userName, userRoles }
}