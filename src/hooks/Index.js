import { useContext, useState } from "react"
import { AuthContext } from '../providers/AuthProvider'
import { login as userLogin } from '../api/Index'
import { LOCALSTORAGE_TOKEN_KEY, removeItemFromLocalStorage, setItemInLocalStorage } from "../utils/Index"


export const useAuth = () => {
    return useContext(AuthContext)
}

export const useProvideAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = async (email, password) => {
        const response = await userLogin(email, password);

        if (response.success) {
            setUser(response.data.user);

            // set token in local storage
            setItemInLocalStorage(
                LOCALSTORAGE_TOKEN_KEY,
                response.data.token ? response.data.token : null
            );

            return {
                success: true
            }
        }
        else {
            return {
                success: false,
                message: response.message
            }
        }
    }

    const logout = () => {
        setUser(null)
        removeItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);
    }

    return {
        user,
        login,
        logout,
        loading
    }
} 