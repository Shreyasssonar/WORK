'use client';
import React, { useRef, useEffect } from "react";
import Link from 'next/link';
import './Hero.css';

export default function Hero() {
    const sliderRef = useRef(null);

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

    return (
        <div>
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

            <section className="choose">
                <h2>Why Thousands Trust Mahendra Devlekar</h2>
                <p>
                    Practical, experience-backed coaching that creates real, lasting
                    transformation — not motivation that fades in 24 hours.
                </p>

                {/* FIXED CAROUSEL */}
                <div className="carousel-wrapper">
                    <div className="carousel-track">
                        {loopCards.map((item, idx) => (
                            <div className="carousel-card" key={idx}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    )
};
