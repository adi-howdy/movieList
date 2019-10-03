import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="nav-bar">
                <div className="nav-container">
                <nav>
            <ul>
                <li>
                    <Link exact to="/">
                        <span>Featured Movies</span>
                    </Link>
                </li>
                <li>
                    <Link to="/AllMovies">
                        <span>All Movies</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Series">
                        <span>Series</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Login">
                        <span>Login</span>
                    </Link>
                </li>
            </ul>
            </nav>
            </div>
            </section>
         );
    }
}
 
export default NavBar;