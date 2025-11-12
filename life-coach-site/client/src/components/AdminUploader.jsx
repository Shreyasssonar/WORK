import React, { useState } from "react";
import { Upload, Button, message, Card, Typography, Spin } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import PageWrapper from "./PageWrapper";

export default function AdminUploader() {
    const [fileList, setFileList] = useState([]);
    const [uploading, setUploading] = useState(false);

    const handleUpload = async () => {
        if (fileList.length === 0) {
            message.warning("Please select at least one file to upload.");
            return;
        }

        const formData = new FormData();
        fileList.forEach((file) => formData.append("files", file.originFileObj));

        try {
            setUploading(true);
            const res = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();
            if (data.success) {
                message.success("✅ Files uploaded successfully!");
                setFileList([]);
            } else {
                message.error("❌ Upload failed: " + (data.error || "Unknown error"));
            }
        } catch (err) {
            console.error(err);
            message.error("❌ Server error while uploading files.");
        } finally {
            setUploading(false);
        }
    };

    const props = {
        multiple: true,
        accept: "image/*,video/*",
        beforeUpload: (file) => {
            setFileList((prev) => [...prev, file]);
            return false; // prevent auto upload
        },
        onRemove: (file) => {
            setFileList((prev) => prev.filter((f) => f.uid !== file.uid));
        },
        fileList,
    };

    return (
        <PageWrapper>
            <Card
                title={<Typography.Title level={3}>📤 Admin Media Uploader</Typography.Title>}
                style={{
                    maxWidth: 500,
                    margin: "50px auto",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                }}
            >
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Select Files</Button>
                </Upload>

                <div style={{ marginTop: 20, textAlign: "center" }}>
                    <Button
                        type="primary"
                        onClick={handleUpload}
                        disabled={fileList.length === 0}
                        loading={uploading}
                    >
                        {uploading ? "Uploading..." : "Upload Files"}
                    </Button>
                </div>

                {uploading && (
                    <div style={{ marginTop: 15, textAlign: "center" }}>
                        <Spin tip="Uploading..." />
                    </div>
                )}
            </Card>
        </PageWrapper>
    );
}
