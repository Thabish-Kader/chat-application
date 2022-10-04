import '../styles/Navbar.css';
import { useNavigate, Link as LinkR } from 'react-router-dom';
import { Link } from 'react-scroll';
import {auth} from '../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth';

export const NavBar = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const signUpPage = () => {
        navigate('/register');
    }

    const signUserOut = async () => {
        await signOut(auth);
        navigate('/login');
    };
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-contanier'>
            <LinkR to="/main" spy={true} smooth={true} offset={-70} duration={500} className='logo'>logo</LinkR>

                <div className="nav-links">
                    <Link to="banner" spy={true} smooth={true} offset={-70} duration={500} id='nav-link'>Home</Link>
                    <Link to="services-section" spy={true} smooth={true} offset={-90} duration={500} id='nav-link'>Services</Link>
                    <Link to='issue' spy={true} smooth={true} offset={-70} duration={500} id='nav-link'>Issue</Link>
                </div>
                <div className='user-info'>
                    {user ? 
                    <>
                    <p className='user-text'>Signed in as <span>{user?.email}</span></p>
                    <button className='glow-on-hover' onClick={signUserOut}>Log Out</button>
                    </>
                    : 
                    <>
                    <button className='glow-on-hover' onClick={signUpPage}>Sign Up</button>
                    </>    
                    }
                </div>
            </div>
    </nav>
    </>


    )
}
