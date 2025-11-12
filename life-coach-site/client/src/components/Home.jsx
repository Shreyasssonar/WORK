import React from "react";
import { Layout, Typography, Row, Col, Divider } from "antd";
import { motion } from "framer-motion";

import Hero from "../components/Hero";
import TrainingCard from "../components/TrainingCard";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

// Hero images
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";

// Training images
import training1 from "../assets/training1.jpeg";
import training2 from "../assets/training2.jpeg";
import training3 from "../assets/training3.jpeg";

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export default function Home() {
    const heroImages = [hero1, hero2, hero3];

    const trainings = [
        {
            title: "Mindfulness Training",
            description:
                "Learn to stay present and reduce stress through mindfulness exercises.",
            image: training1,
        },
        {
            title: "Confidence Boost",
            description:
                "Practical techniques to improve self-confidence and personal growth.",
            image: training2,
        },
        {
            title: "Goal Setting & Planning",
            description:
                "Set clear goals and achieve them with structured methods.",
            image: training3,
        },
    ];

    return (
        <Layout style={{ background: "#fff" }}>
            {/* 🖼 Hero Section */}
            <Hero images={heroImages} />

            <Content style={styles.content}>
                {/* 🌿 About Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={styles.section}
                >
                    <Title level={2} style={styles.sectionTitle}>
                        About Life Coach Hub
                    </Title>
                    <Paragraph style={styles.sectionText}>
                        We pair you with certified coaches to help you reach your goals —
                        whether they are career, wellness, or personal growth related.
                        Discover personalized coaching sessions that empower transformation.
                    </Paragraph>
                </motion.section>

                <Divider />

                {/* 💪 Training Methods */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ ...styles.section, backgroundColor: "#fafafa" }}
                >
                    <Title level={2} style={styles.sectionTitle}>
                        Our Training Methods
                    </Title>
                    <Row gutter={[24, 24]} justify="center">
                        {trainings.map((t, i) => (
                            <Col
                                xs={24}
                                sm={12}
                                md={8}
                                key={i}
                                style={{ display: "flex", justifyContent: "center" }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                >
                                    <TrainingCard
                                        title={t.title}
                                        description={t.description}
                                        image={t.image}
                                    />
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </motion.section>

                <Divider />

                {/* 🖼 Gallery Section */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={styles.section}
                >
                    <Title level={2} style={styles.sectionTitle}>
                        Our Gallery
                    </Title>
                    <Gallery />
                </motion.section>
            </Content>

            {/* 🔻 Footer */}
            <Footer />
        </Layout>
    );
}

// 🎨 Styles
const styles = {
    content: {
        padding: "40px 20px",
    },
    section: {
        textAlign: "center",
        marginBottom: "60px",
    },
    sectionTitle: {
        fontSize: "2.5rem",
        color: "#333",
        fontWeight: "700",
        marginBottom: "20px",
    },
    sectionText: {
        fontSize: "1.2rem",
        color: "#555",
        maxWidth: "800px",
        margin: "0 auto",
        lineHeight: 1.8,
    },
};

