import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container">
            <NavLink className="navbar-brand fw-bold" to="/">{props.title}</NavLink>
            <div className="d-flex ml-2">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn border rounded-circle" type="submit" ><i className="fa-solid fa-magnifying-glass text-secondary"></i></button>
                </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                <li className="form-check form-switch nav-item text-secondary my-2">
                    <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    );
};

Navbar.prototypes = {title: PropTypes.string}

Navbar.defaultProps = {title: 'Enter your title'}

export default Navbar;