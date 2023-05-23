import React from 'react';
import "../App.css"
import logo from "../../src/assets/nib_logo.png"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg nav-bg">
                <div className="container-fluid py-2 px-5">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="logo" className="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link list-font active px-3" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link list-font px-3" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link list-font px-3" href="#compensation">Compensation</a>
                            </li>
                        </ul>

                        <a type='submit' className="btn btn-lg text-white btn-warning" href="#leadform">File a Case Today</a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;