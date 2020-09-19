import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

const Nav = () => {
    return (
        <div>
            <nav>
                <h1>MERN</h1>
                <div className="space"></div>
                <ul className="nav-items">
                    <li>
                        <Link to = '/'> HOME</Link>
                    </li>
                    <li>
                    <Link to = '/register'> REGISTER</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
