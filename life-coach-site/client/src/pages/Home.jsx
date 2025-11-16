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
