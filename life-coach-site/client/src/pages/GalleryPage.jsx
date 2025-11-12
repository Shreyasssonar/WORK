import React, { useEffect, useState } from "react";

export default function Gallery({ isAdmin }) {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch files from server
    const fetchFiles = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/media");
            const data = await res.json();
            if (data.success) {
                setFiles(data.files);
            } else {
                setError(data.error || "Failed to load media files");
            }
        } catch (err) {
            console.error(err);
            setError("Server error while fetching media");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    // Handle file deletion
    const handleDelete = async (url) => {
        const filename = url.split("/").pop();
        if (!window.confirm("Are you sure you want to delete this file?")) return;

        try {
            const res = await fetch("/api/delete", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ filename }),
            });
            const data = await res.json();
            if (data.success) {
                alert("File deleted successfully");
                fetchFiles(); // Refresh gallery
            } else {
                alert("Delete failed: " + data.error);
            }
        } catch (err) {
            console.error(err);
            alert("Server error while deleting file");
        }
    };

    if (loading) return <p style={{ textAlign: "center" }}>Loading media...</p>;
    if (error) return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;

    return (
        <div style={styles.container}>
            {files.length === 0 && <p>No media uploaded yet.</p>}
            <div style={styles.grid}>
                {files.map((url, i) => {
                    const ext = url.split(".").pop().toLowerCase();
                    const isVideo = ["mp4", "webm"].includes(ext);

                    return (
                        <div key={i} style={{ position: "relative" }}>
                            {isVideo ? (
                                <video src={url} controls style={styles.media} />
                            ) : (
                                <img src={url} alt="media" style={styles.media} />
                            )}
                            {isAdmin && (
                                <button
                                    onClick={() => handleDelete(url)}
                                    style={styles.deleteButton}
                                    title="Delete"
                                >
                                    ❌
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const styles = {
    container: { padding: "20px" },
    grid: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
    },
    media: {
        width: "200px",
        height: "150px",
        objectFit: "cover",
        borderRadius: "8px",
    },
    deleteButton: {
        position: "absolute",
        top: "5px",
        right: "5px",
        padding: "2px 6px",
        background: "red",
        color: "#fff",
        border: "none",
        borderRadius: "3px",
        cursor: "pointer",
    },
};

