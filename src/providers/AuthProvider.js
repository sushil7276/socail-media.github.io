import { createContext } from "react";
import { useProvideAuth } from '../hooks/Index'

const initialValue = {
    user: null,
    login: () => { },
    logout: () => { },
    loading: true
}

export const AuthContext = createContext(initialValue);

export const AuthProvider = ({ children }) => {
    const auth = useProvideAuth();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}