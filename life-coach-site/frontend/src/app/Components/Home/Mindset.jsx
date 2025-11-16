'use client';
import React from 'react';
import { FaShieldAlt, FaRedoAlt, FaBrain } from "react-icons/fa";
import './Mindset.css';

export default function Mindset() {
    return (
        <div>
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
        </div>
    );
}
