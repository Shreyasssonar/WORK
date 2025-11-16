'use client';
import React from 'react';
import './Results.css';

export default function Results() {
    return (
        <div>
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
        </div>
    );
}
