import React from "react";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaYoutube
} from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-section">
                    <h3 className="footer-heading">Life Coach</h3>

                    <p className="footer-text">Inquiry : +91 00000 00000</p>
                    <p className="footer-text">Inquiry : +91 00000 00000</p>
                    <p className="footer-text">E-mail : info@LifeCoach.com</p>

                    <h3 className="footer-heading" style={{ marginTop: "25px" }}>
                        Follow Me Now
                    </h3>

                    <p className="footer-text">
                        Daily Life Changing Quote, Post, Reels, Videos & many more…
                    </p>

                    <div className="social-container">
                        <a href="#" className="social-icon"><FaFacebookF /></a>
                        <a href="#" className="social-icon"><FaYoutube /></a>
                        <a href="#" className="social-icon"><FaInstagram /></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">Quick Link</h3>
                    <ul className="footer-list">
                        <li><a className="footer-link" href="/">Home</a></li>
                        <li><a className="footer-link" href="/about">About Us</a></li>
                        <li><a className="footer-link" href="/books">Books</a></li>
                        <li><a className="footer-link" href="/courses">Courses</a></li>
                        <li><a className="footer-link" href="/vip">With VIP’s Gallery</a></li>
                        <li><a className="footer-link" href="/events">Events Gallery</a></li>
                        <li><a className="footer-link" href="/testimonials">Testimonials</a></li>
                        <li><a className="footer-link" href="/contact">Contact Us</a></li>
                        <li><a className="footer-link" href="/terms">Terms & Conditions</a></li>
                    </ul>
                </div>

           <div className="footer-section">
                    <h3 className="footer-heading">Courses</h3>
                    <ul className="footer-list">
                        <li><a className="footer-link" href="#">MLM Success Mastery</a></li>
                        <li><a className="footer-link" href="#">Mega Success System For MLM</a></li>
                        <li><a className="footer-link" href="#">All in One Course</a></li>
                        <li><a className="footer-link" href="#">Mental House Cleaning Meditation</a></li>
                        <li><a className="footer-link" href="#">Mini Nap Meditation</a></li>
                        <li><a className="footer-link" href="#">Phobia Buster Meditation</a></li>
                        <li><a className="footer-link" href="#">Relaxation Meditation</a></li>
                        <li><a className="footer-link" href="#">Spiritual Healing Meditation</a></li>
                        <li><a className="footer-link" href="#">View More Courses…</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3 className="footer-heading">Programs</h3>
                    <ul className="footer-list">
                        <li><a className="footer-link" href="#">Power Mastery</a></li>
                        <li><a className="footer-link" href="#">Inner Journey</a></li>
                        <li><a className="footer-link" href="#">I Love Money</a></li>
                        <li><a className="footer-link" href="#">Advance I Love Money</a></li>
                        <li><a className="footer-link" href="#">I Trainer</a></li>
                        <li><a className="footer-link" href="#">Personal Engineering</a></li>
                        <li><a className="footer-link" href="#">Smart Student</a></li>
                        <li><a className="footer-link" href="#">Art Of Successful Parenting</a></li>
                        <li><a className="footer-link" href="#">Lakshya</a></li>
                        <li><a className="footer-link" href="#">Freedom Mastery Workshop</a></li>
                    </ul>
                </div>

            </div>

            <div className="bottom-bar">
                Life Coach © {new Date().getFullYear()}. All rights reserved.
            </div>

        </footer>
    );
}
