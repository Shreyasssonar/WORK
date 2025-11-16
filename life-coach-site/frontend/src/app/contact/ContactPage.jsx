'use client';
import React from "react";
import { Form, Input, Button, Card, message } from "antd";
// import { postContact } from "../api/api";

export default function ContactForm() {
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            await postContact(values);
            message.success("Message sent successfully!");
            form.resetFields();
        } catch (err) {
            console.error(err);
            message.error("Failed to send message. Try again later.");
        }
    };

    return (
        <div style={styles.wrapper}>
            <Card style={styles.card} bordered={false}>
                <h2 style={styles.title}>Get in Touch</h2>
                <p style={styles.subtitle}>
                    Have questions? Need guidance? I’d love to help you.
                </p>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    style={{ marginTop: 20 }}
                >
                    <Form.Item
                        name="name"
                        label="Full Name"
                        rules={[{ required: true, message: "Please enter your name" }]}
                    >
                        <Input size="large" placeholder="Enter your full name" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        label="Email Address"
                        rules={[
                            { required: true, message: "Please enter your email" },
                            { type: "email", message: "Enter a valid email" }
                        ]}
                    >
                        <Input size="large" placeholder="you@example.com" />
                    </Form.Item>

                    <Form.Item
                        name="mobile"
                        label="Mobile Number"
                        rules={[
                            { required: true, message: "Please enter your mobile number" },
                            {
                                pattern: /^[0-9]{10}$/,
                                message: "Enter a valid 10-digit mobile number"
                            }
                        ]}
                    >
                        <Input size="large" placeholder="9876543210" />
                    </Form.Item>

                    <Form.Item
                        name="message"
                        label="Your Message"
                        rules={[{ required: true, message: "Please enter a message" }]}
                    >
                        <Input.TextArea
                            rows={5}
                            placeholder="Write your message..."
                            size="large"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            block
                            style={styles.button}
                        >
                            Send Message
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
}

const styles = {
    wrapper: {
        display: "flex",
        justifyContent: "center",
        padding: "40px 16px",
        background: "#f5f7fa",
    },
    card: {
        width: "100%",
        maxWidth: 600,
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        borderRadius: 12,
        padding: 20,
    },
    title: {
        textAlign: "center",
        fontSize: 28,
        marginBottom: 4,
    },
    subtitle: {
        textAlign: "center",
        color: "#555",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#ff7f50",
        border: "none",
        fontWeight: 600,
    },
};

