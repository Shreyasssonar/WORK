// client/src/components/Gallery.jsx

import React, { useEffect, useState } from "react";
import { Card, Row, Col, Modal, Image, Spin, message, Popconfirm, Empty } from "antd";
import { DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import { fetchMedia } from "../api/api";

export default function GalleryPage() {
    const [media, setMedia] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);

    // Fetch uploaded media
    useEffect(() => {
        const loadMedia = async () => {
            try {
                const data = await fetchMedia();
                setMedia(data);
            } catch (err) {
                console.error("Error fetching media:", err);
                message.error("Failed to load media from server.");
            } finally {
                setLoading(false);
            }
        };
        loadMedia();
    }, []);

    // Handle delete (optional)
    const handleDelete = async (name) => {
        try {
            const res = await fetch(`/api/media/${name}`, { method: "DELETE" });
            const data = await res.json();
            if (data.success) {
                message.success("File deleted successfully!");
                setMedia(media.filter((m) => m.name !== name));
            } else {
                message.error("Failed to delete file.");
            }
        } catch (err) {
            console.error(err);
            message.error("Server error while deleting file.");
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Gallery</h1>

            {loading ? (
                <Spin tip="Loading gallery..." size="large" />
            ) : media.length === 0 ? (
                <Empty description="No media found. Try uploading from Admin page." />
            ) : (
                <Row gutter={[20, 20]} justify="center">
                    {media.map((item) => (
                        <Col key={item.name} xs={22} sm={10} md={8} lg={6} xl={4}>
                            <Card
                                hoverable
                                cover={
                                    <Image
                                        alt={item.name}
                                        src={item.url}
                                        preview={false}
                                        style={{ height: 200, objectFit: "cover", borderRadius: 8 }}
                                        onClick={() => setSelectedImage(item.url)}
                                    />
                                }
                                actions={[
                                    <EyeOutlined
                                        key="view"
                                        onClick={() => setSelectedImage(item.url)}
                                    />,
                                    <Popconfirm
                                        key="delete"
                                        title="Are you sure to delete this file?"
                                        okText="Yes"
                                        cancelText="No"
                                        onConfirm={() => handleDelete(item.name)}
                                    >
                                        <DeleteOutlined style={{ color: "red" }} />
                                    </Popconfirm>,
                                ]}
                            >
                                <Card.Meta title={item.name} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}

            <Modal
                open={!!selectedImage}
                footer={null}
                onCancel={() => setSelectedImage(null)}
                centered
            >
                <Image src={selectedImage} alt="Preview" width="100%" />
            </Modal>
        </div>
    );
}

const styles = {
    container: {
        padding: "40px 20px",
        textAlign: "center",
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "600",
        marginBottom: "30px",
        color: "#333",
    },
};
