'use client';
import React from 'react';
import './services.css';

export default function Services() {

    const courses = [
        { title: "Success Ingredients", img: "/success-ingredient-course.jpg" },
        { title: "Business Mastery", img: "/business-mastery-course.jpg" },
        { title: "Power Mastery", img: "/power-mastery-course.jpg" },
        { title: "I Love Money", img: "/i-love-money-course.jpg" },
        { title: "Mega Success System for MLM", img: "/Mega-Success-System-For-MLM.jpg" },
        { title: "MLM Success Mastery", img: "/MLMsuccessmastery.jpg" },
        { title: "Re-create Your Self Image", img: "/Re-createYourSelfImage.jpg" },
        { title: "The Magic of One Ideal Day", img: "/TheMagicofOneIdealDay.jpg" },
        { title: "Anti Aging", img: "/ANTI-AGING-2.jpg" },
        { title: "Anti Ageing Meditation", img: "/Anti-Ageing-Mediation-1.jpg" },
        { title: "Go Diamond", img: "/Go-Diamond-1.jpg" },
        { title: "Third Eye", img: "/Third-Eye-1.jpg" },
        { title: "Spiritual Healing", img: "/Spiritual-Healing-1.jpg" },
        { title: "Relaxation", img: "/Ralaxation-1.jpg" },
        { title: "Phobia Buster", img: "/Phobia-Buster-1.jpg" },
        { title: "Mini Nap", img: "/Mini-Nap-1.jpg" },
        { title: "Mental House Cleaning", img: "/Mental-House-Cleaning-1.jpg" },
        { title: "Forgiveness Meditation", img: "/Forgiveness-Meditation-1.jpg" },
        { title: "Divine Planning", img: "/Divine-Planning-1.jpg" },
        { title: "Positive Affirmations Meditation", img: "/Positive-Affirmations-1.jpg" },
        { title: "Attract Money", img: "/Attract-Money-1.jpg" },
        { title: "7 Chakra Meditation", img: "/7-Chakra-Meditation-1.jpg" },
        { title: "Effective Study Meditation", img: "/Effective-Study-Meditation-1.jpg" },
    ];

    return (
        <div>

            {/* HERO */}
            <section className="services-hero">

                {/* back of hero section video with dark layer */}
                <video
                    className="services-hero-video"
                    src="/41506-429661323_small.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                <div className="services-hero-overlay"></div>

                <h1 className="services-hero-title">
                    Transform Your Life With Powerful Courses
                </h1>
            </section>

            {/* COURSES GRID */}
            <section className="services-courses-wrapper">
                <h2 className="services-courses-title">All Courses</h2>

                <div className="services-courses-grid">
                    {courses.map((course, index) => (
                        <div className="course-card" key={index}>
                            <img className="course-card-img" src={course.img} alt={course.title} />
                            <h3 className="course-card-title">{course.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}
