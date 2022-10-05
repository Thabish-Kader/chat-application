import React, {useState} from 'react'
import '../styles/Register.css'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {auth} from '../config/firebase'
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom'

export const Register = () => {

    const navigate = useNavigate();
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const notify = () => toast.error('Error! Please Try Again', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword) 
            console.log(user);
            console.log(registerPassword);
            navigate('/login')
        }
        catch (err) {
            console.log(err.message);
            notify()
        }

    }

    return (

        <section className='login-page'> 
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
            <div className='form-wrapper'>
                <div className='form-content'>
                    <div className='form'>
                        <h1 className='h1-label'>Sign Up</h1>
                        {/* <label className='label'>Name</label>
                        <input type='username' className='input'/> */}
                        <label className='label'>Email</label>
                        <input  className='input' type='email' onChange={(e) => setRegisterEmail(e.target.value)}/>
                        <label className='label' >Password</label>
                        <input className='input' type="password" onChange={(e) => setRegisterPassword(e.target.value)}/>
                        <button onClick={register} className='submit-btn'>Submit</button>
                        <h5 className='login-msg'>Already have an account <Link to='/login'> Click Here</Link></h5>
                    </div>
                </div>


            </div>
        </section>
    )
}
