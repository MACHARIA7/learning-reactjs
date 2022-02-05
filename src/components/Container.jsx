import 'rsuite/dist/rsuite.min.css';

import { React, useState } from "react";
import {
    Container, Nav, Navbar, Header, Content, Footer, Sidebar, Sidenav, Button, Dropdown,
} from "rsuite";


export default function SimpleContainer() {

    const SidebarStyles = {
        display: "flex",
        flexDirection: "column",
    }

    const [expand, setExpand] = useState(true); 
    
    // Header Styles
    const headerStyles = {
        padding: 18,
        fontSize: 16,
        height: 56,
        background: "#34c3ff",
        color: "#fff",
        whiteSpace: "noWrap",
        overflow: 'hidden'
    }

    const NavToggler = ({ expand, onChange }) => {
        return (
            <Navbar appearance="subtle" className="nav-toggle">
                <Navbar.Body>
                    <Nav>
                        <Dropdown placement="topStart" trigger="click">
                            <Dropdown.Item>Help</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                    </Nav>

                    <Nav pullRight>
                        <Nav.Item
                            onClick={onChange}
                            style={{width: 56, textAlign:"center"}}>
                            {expand ? "<" : ">"}
                        </Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>
        )
    }

    return (
        <div className="show-container rs-theme-dark">
            <Container className="rs-theme-dark">

                <Sidebar style={SidebarStyles} width={expand ? 260 : 56} collapsible>
                    <Sidenav.Header>
                        <div style={headerStyles}>
                            <span style={{marginLeft: 12}}>BRAND</span>
                        </div>
                    </Sidenav.Header>

                    <Sidenav expanded={expand} defaultOpenKeys={["3"]} appearance="subtle">
                        <Sidenav.Body>
                            <Nav>
                                <Nav.Item>DASHBOARD</Nav.Item>
                                <Dropdown title="Orders" eventKey="3" trigger="hover">
                                    <Dropdown.Item>Unpaid</Dropdown.Item>
                                    <Dropdown.Item>Archived</Dropdown.Item>
                                </Dropdown>
                                <Nav.Item>Employers</Nav.Item>
                                <Nav.Item>Invoices</Nav.Item>
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                    <NavToggler expand={expand} onChange={()=>setExpand(!expand)}></NavToggler>
                </Sidebar>
                
                <Container>
                    <Header>
                        <h2>Page Title</h2>
                    </Header>
                    <Content>
                        Some page content
                        <Button appearance="primary" color="green">Click Me</Button>
                    </Content>
                    
                </Container>
            </Container>
        </div>
    )
}