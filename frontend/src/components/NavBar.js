import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';



export const NavBar = () => {
    const navigate = useNavigate();

    const singUpPage = () => {
        navigate('/register');
    }
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-contanier'>
            <Link to="main" spy={true} smooth={true} offset={-50} duration={500} className='logo'>logo</Link>

                <div className="nav-links">
                    <Link to="banner" spy={true} smooth={true} offset={-70} duration={500} id='nav-link'>Home</Link>
                    <Link to="services-section" spy={true} smooth={true} offset={-70} duration={500} id='nav-link'>Services</Link>
                    <Link to='issue' spy={true} smooth={true} offset={-70} duration={500} id='nav-link'>Issue</Link>
                </div>

                <button className='glow-on-hover' onClick={singUpPage}>Sign Up</button>
            </div>
    </nav>
    </>


    )
}
