'use client';
import React from 'react';
import Link from 'next/link';
import './Subhero.css';

export default function Subhero() {
    return (
        <div>
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
        </div>
    );
}
