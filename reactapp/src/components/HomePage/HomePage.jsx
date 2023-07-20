import React from 'react'
import './HomePage.css'
import { Link, Outlet } from 'react-router-dom'

function HomePage() {
    return(
        <div className='body'><div><br/></div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light mx-auto">
            <div className="container-fluid">
                <a className="navbar-brand">Bussines Loan</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to="/Applyloan" className="nav-link" id='Applyloan'>Apply Loan</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Loanstatus" className="nav-link" id='loanstatus'>Loan Status</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Profile" className="nav-link" id='profile'>Profile</Link>
                            </li>
                        </ul>
                        <Link to="/" className="nav-link" id='logout'>Logout</Link>    
                    </div>                
            </div>
            <Outlet />
            </nav>
        </div>
    )
}
export default HomePage