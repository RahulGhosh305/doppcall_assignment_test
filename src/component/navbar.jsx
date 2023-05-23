import React from 'react';
import "../App.css"
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg nav-bg">
                <div className="container-fluid py-2 px-5">
                    <a className="navbar-brand" href="#">
                        <img src="../../src/assets/nib_logo.png" alt="logo" className="logo" />
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
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-success" type="submit">File a Case Today</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;