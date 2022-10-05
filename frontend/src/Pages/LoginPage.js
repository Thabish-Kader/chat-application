import React, {useState} from 'react';
import '../styles/Login.css';
import googleImg from '../assets/google.svg'
import {auth , provider} from '../config/firebase'
import {signInWithPopup, signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


    const navigate = useNavigate();
    
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        navigate('/main');
    };

    const notify = () => toast.error("Error ! Please try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, loginPassword) 
            navigate('/main')
        }
        catch (err) {
            notify();
        }
    }

    return (
        <div className='login-container'>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            <div className='login-wrapper'>
                <h1>Login</h1>
                <button className='google-btn' onClick={signInWithGoogle}> <img src={googleImg} />Sign in with Google</button>
                <p className='divider'>--------------- OR ---------------</p>
                <div className='login-form'>
                    <div className='email-fields'>
                    <p>Email</p>
                    <input className="input-fields" type="email" placehoder="Enter Email...." onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='password-fields'>
                    <p>Password</p>
                    <input className="input-fields" type="password" placehoder="Enter Password...." onChange={(e) => setLoginPassword(e.target.value)}/>
                    </div>
                    <button id="login-btn" onClick={login}>Login</button>
                </div>
            </div>
        </div>
    )
}
