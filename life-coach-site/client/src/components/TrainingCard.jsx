// client/src/components/TrainingCard.jsx
import React from "react";
import "./TrainingCard.css";
import PageWrapper from "./PageWrapper";
<PageWrapper>
    {/* page content */}
</PageWrapper>


export default function TrainingCard({ title, description, image }) {
    return (
        <div style={styles.card}>
            <img src={image} alt={title} style={styles.image} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

const styles = {
    card: {
        width: "300px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        overflow: "hidden",
        textAlign: "center",
        padding: "10px",
        transition: "transform 0.3s",
    },
    image: { width: "100%", height: "200px", objectFit: "cover", borderRadius: "10px" },
};
