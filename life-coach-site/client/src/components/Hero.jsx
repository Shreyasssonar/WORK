import React, { useState, useEffect } from "react";
import { Carousel, Button, Typography } from "antd";
import { motion } from "framer-motion";

const { Title, Paragraph } = Typography;

export default function Hero({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically change slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    if (!images || images.length === 0) return null;

    return (
        <section style={styles.heroContainer}>
            <Carousel
                autoplay
                autoplaySpeed={3000}
                dots={false}
                effect="fade"
                afterChange={(index) => setCurrentIndex(index)}
            >
                {images.map((img, index) => (
                    <div key={index}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: index === currentIndex ? 1 : 0 }}
                            transition={{ duration: 1 }}
                            style={{
                                ...styles.heroImageWrapper,
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img})`,
                            }}
                        >
                            <div style={styles.overlay}>
                                <Title level={1} style={styles.title}>
                                    Transform Your Life Today
                                </Title>
                                <Paragraph style={styles.subtitle}>
                                    Connect with certified life coaches to achieve your goals.
                                </Paragraph>
                                <Button
                                    type="primary"
                                    size="large"
                                    style={styles.button}
                                    onClick={() => (window.location.href = "/contact")}
                                >
                                    Book a Session
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
}

// 🎨 Styles
const styles = {
    heroContainer: {
        position: "relative",
        width: "100%",
        height: "80vh",
        overflow: "hidden",
    },
    heroImageWrapper: {
        height: "80vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    overlay: {
        textAlign: "center",
        color: "#fff",
        background: "rgba(0, 0, 0, 0.4)",
        padding: "40px 20px",
        borderRadius: "12px",
        maxWidth: "700px",
    },
    title: {
        fontSize: "3rem",
        fontWeight: 700,
        color: "#fff",
    },
    subtitle: {
        fontSize: "1.3rem",
        color: "#f0f0f0",
        marginBottom: "25px",
    },
    button: {
        background: "#ff7f50",
        border: "none",
        borderRadius: "8px",
        padding: "12px 24px",
    },
};


