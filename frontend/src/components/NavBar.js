import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navbar.css';


export const NavBar = () => {

    return (
    <Navbar  expand="lg" className='navbar'>
        <Container className='navbar-contanier'>
            <Navbar.Brand href="#home" className='logo'>logo</Navbar.Brand>
            <Nav className="nav-links">
                <Nav.Link href="#home" className='nav-link'>Home</Nav.Link>
                <Nav.Link href="#link" className='nav-link'>About</Nav.Link>
                <Nav.Link href='#link3' className='nav-link'>Issue</Nav.Link>
            </Nav>
            <button className='glow-on-hover'>Sign Up</button>
        </Container>
    </Navbar>
    )
}
