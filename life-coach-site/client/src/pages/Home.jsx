import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { image } from "framer-motion/client";
import { FaShieldAlt, FaRedoAlt, FaBrain } from "react-icons/fa";

export default function Home() {
    const sliderRef = useRef(null);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cards = [
        {
            title: "Life-Changing Transformations",
            text: "Thousands experienced breakthrough shifts in mindset, habits, confidence & growth.",
        },
        {
            title: "Proven Mind Coaching",
            text: "Practical tools rooted in psychology, discipline, and high-performance behaviour.",
        },
        {
            title: "Personal Attention",
            text: "Every individual receives personal guidance & step-by-step transformation support.",
        },
        {
            title: "Result-Oriented Framework",
            text: "Clear, structured systems that create measurable improvement in real life.",
        },
    ];

    const loopCards = [...cards, ...cards];

    // 🔥 FIXED AUTOSCROLL
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let speed = 1;

        const slide = () => {
            slider.scrollLeft += speed;

            const maxScroll = slider.scrollWidth / 2;

            if (slider.scrollLeft >= maxScroll) {
                slider.scrollLeft = 0;
            }
        };

        const interval = setInterval(slide, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>

            {/* HERO */}
            <section className="hero">
                <div className="hero-left">
                    <h1>Transform Your Mind. Transform Your Life.</h1>
                    <p>
                        India's leading Mind Coach helping people break mental blocks,
                        build unshakeable confidence, master habits, and create powerful
                        life transformations.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary">Join Power Mastery</button>
                        <button className="btn-outline">Know More</button>
                    </div>
                </div>

                <div className="hero-right">
                    <img src="/home-slider-img.png" alt="Mahendra Devlekar" />
                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="choose">
                <h2>Why Thousands Trust Mahendra Devlekar</h2>
                <p>
                    Practical, experience-backed coaching that creates real, lasting
                    transformation — not motivation that fades in 24 hours.
                </p>

                <div className="carousel" ref={sliderRef}>
                    {loopCards.map((item, idx) => (
                        <div className="carousel-card" key={idx}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ABOUT */}
            <section className="about">
                <div className="about-img">
                    <img src="/home-about-img1.png" alt="Coach" />
                </div>

                <div className="about-text">
                    <h2>Meet Mahendra Devlekar</h2>
                    <p>
                        Internationally recognised Mind Coach, motivational speaker,
                        and transformation expert empowering thousands through
                        Power Mastery workshops, mindset systems, and breakthrough
                        coaching strategies.
                    </p>

                    <ul>
                        <li>Founder of the Power Mastery Program</li>
                        <li>10+ years of experience in mindset & personal transformation</li>
                        <li>Trusted by students, professionals, entrepreneurs & families</li>
                        <li>Known for simple, practical & result-oriented systems</li>
                    </ul>
                </div>
            </section>

            {/* SERVICES */}
            <section className="services">
                <h2>Workshops & Programs</h2>
                <p>
                    Each program is designed to rewire habits, build clarity,
                    increase focus, overcome mental limitations, and create
                    unstoppable confidence.
                </p>

                <div className="services-grid">
                    <div className="service-card">
                        <img src="/PowerMastery.png" alt="" />
                        <h3>Power Mastery</h3>
                        <p>
                            The flagship life-transformation program that helps you
                            break limitations, build powerful habits, and unlock your
                            true potential.
                        </p>
                    </div>

                    <div className="service-card">
                        <img src="/MindsetResetWorkshop.png" alt="" />
                        <h3>Mindset Reset Workshop</h3>
                        <p>
                            A deep-dive session to eliminate self-doubt, boost confidence,
                            and rebuild mental strength with proven tools.
                        </p>
                    </div>

                    <div className="service-card">
                        <img src="/Study&FocusMastery.png" alt="" />
                        <h3>Study & Focus Mastery</h3>
                        <p>
                            Specially designed for students — improve concentration, remove
                            distractions, and build exam-ready discipline.
                        </p>
                    </div>
                </div>
            </section>

            {/* MINDSET */}
            <section className="mindset">
                <h2>Core Transformation Pillars</h2>
                <p>
                    These core elements are the foundation of every breakthrough
                    transformation in our programs.
                </p>

                <div className="mindset-grid">
                    {[
                        {
                            title: "Confidence Building",
                            text: "Develop deep self-belief and eliminate fear, hesitation & overthinking.",
                            icon: <FaShieldAlt className="mindset-icon" />
                        },
                        {
                            title: "Habit Transformation",
                            text: "Proven habit systems that reprogram your mind & daily routine.",
                            icon: <FaRedoAlt className="mindset-icon" />
                        },
                        {
                            title: "Emotional Clarity",
                            text: "Techniques to reduce stress, overthinking & emotional overload.",
                            icon: <FaBrain className="mindset-icon" />
                        },
                    ].map((item, i) => (
                        <div className="mindset-card" key={i}>
                            <div className="mindset-row">
                                <div className="mindset-icon-box">{item.icon}</div>

                                <div className="mindset-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </section>

            {/* RESULTS */}
            <section className="results">
                <h2>Real Transformations</h2>
                <p>
                    Thousands of people have shifted their mindset, habits and entire life trajectory
                    through these programs.
                </p>

                <div className="results-grid">
                    {[
                        {
                            name: "Rahul",
                            image: "Rahul.png",
                            text: "Gained clarity, confidence & discipline — completely changed career direction.",
                        },
                        {
                            name: "Sneha",
                            image: "Sneha.png",
                            text: "Overcame years of low confidence and built a strong, fearless mindset.",
                        },
                        {
                            name: "Amit",
                            image: "Amit.png",
                            text: "Transformed productivity & habits — running a successful business today.",
                        },
                    ].map((item, i) => (
                        <div className="result-card" key={i}>
                            <img src={`/${item.image}`} alt={item.name} className="result-img" />
                            <h3>{item.name}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta">
                <h2>Ready for Your Breakthrough?</h2>
                <p>
                    The right mindset can transform your career, relationships,
                    confidence, habits — and your entire life.
                </p>
                <button className="cta-btn">Start Your Journey</button>
            </section>
        </div>
    );
}
