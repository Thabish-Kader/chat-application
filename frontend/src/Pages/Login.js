import React from 'react'
import '../styles/Register.css'


export const Login = () => {
    return (
        <section className='login-page'> 
            <div className='form-wrapper'>
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