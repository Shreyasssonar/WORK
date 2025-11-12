import React from "react";
import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
    const variants = {
        initial: { opacity: 0, y: 20 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -20 },
    };

    return (
        <motion.div
            variants={variants}
            initial="initial"
            animate="in"
            exit="out"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ minHeight: "80vh" }}
        >
            {children}
        </motion.div>
    );
}
