import React from 'react'
import './admin.css'
import { Link, Outlet } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'

function admin() {
    return(
        <div className='body'><div><br/></div>
           <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/admin" className="brand-container">
                    Business Loan Management 
                    <br />
                    <span className="brand-subtext">Admin</span>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/Appliedloans">Applied Loans</Nav.Link>
                    <Nav.Link as={Link} to="/LoanDetails">Loan Details</Nav.Link>
                </Nav>
                <Nav className="ms-auto">
                    <Button className="logout-btn" variant="outline-light" as={Link} to="/">Logout</Button>
                </Nav>
            <Outlet />
            </Navbar>

        </div>
    )
}
export default admin