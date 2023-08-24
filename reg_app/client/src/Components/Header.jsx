import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className="container-fluid bg-primary sticky-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-primary navbar-light p-lg-0">
                <div className="col-md-3">
                    <Link to="/" className="navbar-brand">
                        <img src="img/augrade_logo.png" alt="augrade logo"/>
                    </Link>
                </div>
                <div className="com-md-9">
                    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to="/Merge" className="nav-item nav-link active">Merge</Link>
                            <Link to="/Dreamspace" className="nav-item nav-link active">Dreamspace</Link>
                            <Link to="/MergePricing" className="nav-item nav-link active">Use Cases</Link>
                            <Link to="/OurStory" className="nav-item nav-link active">About us</Link>
                            <Link to="/Career" className="nav-item nav-link active">Career</Link>
                        </div>
                        <div className="ms-auto d-none d-lg-block">
                            <Link to="ContactUs" className="btn btn-primary rounded-pill py-1">Free trial</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  )
}
