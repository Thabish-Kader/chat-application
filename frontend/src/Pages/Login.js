import React from 'react'
import '../styles/Login.css'


export const Login = () => {
    return (
        <section className='login-page'> 
            <div className='form-wrapper'>
                <div className='form-content'>
                    <form className='form'>
                        <h1 className='h1-label'>Sign Up</h1>
                        <label className='label'>Name</label>
                        <input type='username' className='input'/>
                        <label className='label'>Email</label>
                        <input  className='input' type='email'/>
                        <label className='label'>Password</label>
                        <input className='input' type='password'/>
                        <button type='submit' className='submit-btn'>Submit</button>
                    </form>
                </div>


            </div>
        </section>
    )
}
