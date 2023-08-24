import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
<>
    <div className="container-fluid footer wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row mb-5">
                <div className="col-lg-3 col-md-12">
                    <img src="img/footer-logo.png" className="img-fluid" alt="augrade"/>
                </div>
                <div className="col-lg-9 col-md-12">

                </div>
            </div>
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="mb-4">Explore</h4>
                    <Link className="btn btn-link" to="#">AR Glass</Link>
                    <Link className="btn btn-link" to="/NewsRoom">Newsroom</Link>
                    <Link className="btn btn-link" to="/Career">Career</Link>
                    <Link className="btn btn-link" to="#">Newsletter</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="mb-4">Services</h4>
                    <Link className="btn btn-link" to="/RealEstate">Real Estate</Link>
                    <Link className="btn btn-link" to="/Aerospace">Aerospace</Link>
                    <Link className="btn btn-link" to="/Automotive">Automotive</Link>
                    <Link className="btn btn-link" to="/NewsRoom">Newsroom</Link>
                    <Link className="btn btn-link" to="/BlogPage">Blog Page</Link>
                    <Link className="btn btn-link" to="/SwPricing">SW Pricing</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="mb-4">Help</h4>
                    <Link className="btn btn-link" to="/OurStory">About Augrade</Link>
                    <Link className="btn btn-link" to="#">Support</Link>
                    <Link className="btn btn-link" to="/ContactUs">Contact Us</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="mb-4">Augrade Private Limited</h4>
                    <p>Improving the quality of your life</p>
                    <div className="d-flex pt-3 text-center">
                        <Link className="btn btn-square btn-dark rounded-circle me-2" to=""><i
                                className="fab fa-facebook-f"></i></Link>
                        <Link className="btn btn-square btn-dark rounded-circle me-2" to=""><i
                                className="fab fa-linkedin"></i></Link>
                        <Link className="btn btn-square btn-dark rounded-circle me-2" to=""><i
                                className="fab fa-twitter"></i></Link>
                        <Link className="btn btn-square btn-dark rounded-circle me-2" to=""><i
                                className="fab fa-instagram"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid copyright py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    <Link className="" to="/">All Rights Reserved 2022 @ Augrade Pvt. Ltd.</Link>
                </div>
                <div className="col-md-6 text-center text-md-end">
                    <Link className="" to="#">Terms Of Use</Link> | <Link className="" to="#">Privacy Policy</Link>
                </div>
            </div>
        </div>
    </div>
    <Link to="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i
            className="bi bi-arrow-up"></i></Link>
</>
  )
}
