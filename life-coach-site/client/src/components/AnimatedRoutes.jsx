import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Service from "../pages/Service";
import ContactPage from "../pages/ContactPage";
import GalleryPage from "../pages/GalleryPage";
import AdminPage from "../pages/AdminPage";

// Define transition animation
const pageTransition = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: "easeIn" } },
};

export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
                <Route
                    path="/"
                    element={
                        <motion.div {...pageTransition}>
                            <Home />
                        </motion.div>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <motion.div {...pageTransition}>
                            <About />
                        </motion.div>
                    }
                />
                <Route
                    path="/services"
                    element={
                        <motion.div {...pageTransition}>
                            <Service />
                        </motion.div>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <motion.div {...pageTransition}>
                            <ContactPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/gallery"
                    element={
                        <motion.div {...pageTransition}>
                            <GalleryPage />
                        </motion.div>
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <motion.div {...pageTransition}>
                            <AdminPage />
                        </motion.div>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
}
