import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../providers/AuthProvider'
import { login as userLogin } from '../api/Index'
import { getItemFromLocalStorage, LOCALSTORAGE_TOKEN_KEY, removeItemFromLocalStorage, setItemInLocalStorage } from "../utils/Index"
import jwtDecode from "jwt-decode"


export const useAuth = () => {
    return useContext(AuthContext)
}

export const useProvideAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userToken = getItemFromLocalStorage(LOCALSTORAGE_TOKEN_KEY);

        if (userToken) {
            const user = jwtDecode(userToken);
            setUser(user);
        }
        setLoading(false)
    }, [])

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