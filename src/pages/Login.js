import React, { useState } from 'react'
import styles from '../styles/login.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../hooks/Index';


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = useAuth();
    console.log(auth)

    // notification not shoing multiple time
    const customId = "custom-id-yes";

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!email || !password) {
            return toast.error('Please Enter Both Email and Password', {
                toastId: customId,
            })
        }

        const response = await auth.login(email, password);
        if (response.success) {
            toast.success('Successfully Logged In', {
                toastId: customId,
            })

        } else {
            toast.error(response.message, {
                toastId: customId,
            })
        }
    }

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <span className={styles.loginSignupHeader}>Log In</span>

            <div className={styles.field}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className={styles.field}>
                <input type="password" placeholder="Paasword" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className={styles.field} >
                <button>Log In</button>
            </div>
        </form>
    )
}

export default Login