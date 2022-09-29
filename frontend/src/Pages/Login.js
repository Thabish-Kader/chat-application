import React from 'react'
import '../styles/Register.css'
import {auth , provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate('/main');
    };

    return (
        <section className='login-page'> 
            <div className='form-wrapper'>
                <p>Sign in with Google</p>
                <button className='submit-btn' onClick={signInWithGoogle}>Sign In with Google</button>
                <div className='form-content'>
                    <form className='form'>
                        <h1 className='h1-label'>Log In</h1>
                        <label className='label'>Username</label>
                        <input type='username' className='input'/>

                        <label className='label'>Password</label>
                        <input className='input' type='password'/>
                        <button type='submit' className='submit-btn'>Submit</button>
                    </form>
                </div>


            </div>
        </section>
    )
}
