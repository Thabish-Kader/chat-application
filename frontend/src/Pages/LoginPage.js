import React from 'react';
import '../styles/Login.css';
import googleImg from '../assets/google.svg'
import {auth , provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom';

export const LoginPage = () => {

    const navigate = useNavigate();
    
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate('/main');
    };

    return (
        <div className='login-container'>
            <div className='login-wrapper'>
                <h1>Login</h1>
                <button className='google-btn' onClick={signInWithGoogle}> <img src={googleImg} />Sign in with Google</button>
                <p className='divider'>--------------- OR ---------------</p>
                <form className='login-form'>
                    <div className='email-fields'>
                    <p>Email</p>
                    <input className="input-fields" type="email" placehoder="Enter Email...."/>
                    </div>
                    <div className='password-fields'>
                    <p>Password</p>
                    <input className="input-fields" type="password" placehoder="Enter Password...."/>
                    </div>
                    <button id="login-btn" type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
