'use client';
import React from 'react';
import './Services.css';

export default function Services() {
    return (
        <div>
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
        </div>
    );
}
