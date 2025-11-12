import React from "react";
import 'antd/dist/reset.css'; // or 'antd/dist/antd.css' if using older Ant version

import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";

const { Content } = Layout;

function App() {
    return (
        <Router>
            <Layout style={{ minHeight: "100vh", background: "#fff" }}>
                <Header />
                <Content style={{ marginTop: 64 }}>
                    <AnimatedRoutes />
                </Content>
                <Footer />
            </Layout>
        </Router>
    );
}

export default App;


