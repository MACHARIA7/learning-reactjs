import { React } from "react";

// Themeing - Default CSS
// import 'rsuite/dist/rsuite.min.css';
import 'rsuite/styles/index.less';


import { Navbar, Nav, Dropdown } from "rsuite";


const SimpleNavbar = () => {
    return (
        <Navbar appearance="inverse">
            <Navbar.Brand href="#">Safaricom</Navbar.Brand>

            <Nav>
                <Nav.Item>Home</Nav.Item>
                <Nav.Item>News</Nav.Item>
                <Nav.Item>Products</Nav.Item>
                <Dropdown title="About">
                    <Dropdown.Item>Company</Dropdown.Item>
                    <Dropdown.Item>Team</Dropdown.Item>
                    <Dropdown.Item>Contact</Dropdown.Item>
                </Dropdown>
            </Nav>
            <Nav pullRight>
                <Nav.Item>Login</Nav.Item>
                <Nav.Item>Sign up</Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default SimpleNavbar;