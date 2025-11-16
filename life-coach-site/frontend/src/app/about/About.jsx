'use client';
import React from 'react';
import './About.css';
import { FaBullseye, FaEye } from "react-icons/fa";

export default function About() {
    return (
        <main className="about-main-wrapper">

            {/* HERO VIDEO */}
            <section className="about-hero-video-section">
                <div className="about-hero-video-wrapper">
                    <video className="about-hero-video" autoPlay muted loop playsInline>
                        <source src="/uhd_3840_2160_25fps.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="about-hero-gradient"></div>

                <div className="about-hero-center-text">
                    <h1 className="about-hero-title">Empowering People Through Proven Performance Systems</h1>
                    <p className="about-hero-subtitle">15+ Years • Lakhs Transformed • Global Certification Leader</p>

                    <div className="about-hero-buttons">
                        <a href="#programs" className="about-btn-primary">Explore Programs</a>
                        <a href="#video" className="about-btn-outline">Watch Intro</a>
                    </div>
                </div>

                <div className="about-floating-stats">
                    <div className="about-stat-box">
                        <h3 className="about-stat-number">15+</h3>
                        <p className="about-stat-label">Years Experience</p>
                    </div>
                    <div className="about-stat-box">
                        <h3 className="about-stat-number">7+ Countries</h3>
                        <p className="about-stat-label">Global Reach</p>
                    </div>
                    <div className="about-stat-box">
                        <h3 className="about-stat-number">5 Lakh+</h3>
                        <p className="about-stat-label">Lives Impacted</p>
                    </div>
                </div>
            </section>

            {/* ORIGIN */}
            <section className="about-section about-origin-section">
                <div className="about-origin-flex">
                    <div className="about-origin-text">
                        <h2 className="about-origin-heading">Where It All Started</h2>
                        <p className="about-origin-description">
                            Mahendra recognised one core truth early — people crave transformation but lack the
                            <strong> structure </strong> and <strong> accountability </strong> required to sustain it.
                            What began as personal study evolved into refined performance frameworks now used across the world.
                        </p>
                    </div>

                    <div className="about-origin-media">
                        <img src="/WhereItAllStarted.png" alt="Mahendra on stage" className="about-origin-image" />
                    </div>
                </div>
            </section>

            {/* DIFFERENT */}
            <section className="about-section about-different-section">
                <h2 className="about-title-center">Why His Method Works</h2>

                <div className="about-diff-grid">

                    <div className="about-diff-card">
                        <img src="/SystemsNotMotivation.png" className="about-diff-vector" alt="Systems Not Motivation" />
                        <h3 className="about-diff-card-title">Systems, Not Motivation</h3>
                        <p className="about-diff-card-text">Clear frameworks that actually shift behaviour and create measurable growth.</p>
                    </div>

                    <div className="about-diff-card">
                        <img src="/BehaviourDrivenStrategy.png" className="about-diff-vector" alt="Behaviour Driven Strategy" />
                        <h3 className="about-diff-card-title">Behaviour-Driven Strategy</h3>
                        <p className="about-diff-card-text">Practical methods based on real transformation, not hype or inspiration.</p>
                    </div>

                    <div className="about-diff-card">
                        <img src="/RealResultsatScale.png" className="about-diff-vector" alt="Real Results at Scale" />
                        <h3 className="about-diff-card-title">Real Results at Scale</h3>
                        <p className="about-diff-card-text">Modern success formulas used by lakhs across multiple regions.</p>
                    </div>
                </div>
            </section>

            {/* CERTIFICATION */}
            <section className="about-section about-cert-section">
                <div className="about-cert-flex">

                    <div className="about-cert-media">
                        <video autoPlay muted loop playsInline className="about-cert-video">
                            <source src="/8244304.mp4" type="video/mp4" />
                        </video>
                    </div>

                    <div className="about-cert-text">
                        <h2 className="about-cert-heading">Global Certification Program</h2>
                        <p className="about-cert-description">
                            Mahendra now trains <strong>trainers</strong>, mentoring a global ecosystem of coaches who
                            deliver his performance systems with clarity and precision.
                        </p>

                        <div className="about-cert-points">
                            <span className="about-cert-point">Worldwide Trainer Community</span>
                            <span className="about-cert-point">Structured Teaching Framework</span>
                            <span className="about-cert-point">Transformation Tools & Real Application</span>
                        </div>

                        <a href="#contact" className="about-btn-primary about-cert-btn">Become a Certified Trainer</a>
                    </div>

                </div>
            </section>

            {/* MISSION */}
            <section className="about-section about-mission-section">
                <h2 className="about-title-center">Mission & Vision</h2>

                <div className="about-mission-grid">

                    <div className="about-mission-box">
                        <FaBullseye className="about-mission-icon" />
                        <h3 className="about-mission-box-title">Mission</h3>
                        <p className="about-mission-box-text">To empower people with clarity, confidence, and high-performance systems.</p>
                    </div>

                    <div className="about-mission-box">
                        <FaEye className="about-mission-icon" />
                        <h3 className="about-mission-box-title">Vision</h3>
                        <p className="about-mission-box-text">A global community transforming lives using repeatable personal growth frameworks.</p>
                    </div>

                </div>
            </section>

            {/* FINAL CTA */}
            <section className="about-final-big-cta">
                <div className="about-cta-content">
                    <h2 className="about-cta-heading">Ready to Transform or Start Transforming Others?</h2>

                    <div className="about-cta-buttons">
                        <a href="#contact" className="about-btn-primary about-cta-btn">Work With Mahendra</a>
                    </div>
                </div>
            </section>

        </main>
    );
}
