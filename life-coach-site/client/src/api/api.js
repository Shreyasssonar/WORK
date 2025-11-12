// client/src/api/api.js

// ✅ Smart API base handling — works in Vite, CRA, or production
const API_BASE =
    import.meta?.env?.VITE_API_BASE ||
    process.env.REACT_APP_API_BASE ||
    (window.location.hostname === "localhost"
        ? "http://localhost:5000"
        : "");

// ✅ Universal response handler
async function handleResponse(res) {
    if (!res.ok) {
        const errText = await res.text();
        throw new Error(`HTTP ${res.status}: ${errText}`);
    }
    return res.json();
}

// ✅ Fetch all uploaded media
export async function fetchMedia() {
    const res = await fetch(`${API_BASE}/api/media`);
    return handleResponse(res);
}

// ✅ Send contact form data
export async function postContact(data) {
    const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return handleResponse(res);
}

// ✅ Upload photos/videos (admin)
export async function uploadMedia(files, adminToken) {
    const form = new FormData();
    Array.from(files).forEach((file) => form.append("files", file));

    const res = await fetch(`${API_BASE}/api/upload`, {
        method: "POST",
        headers: adminToken ? { "x-admin-token": adminToken } : {},
        body: form,
    });

    return handleResponse(res);
}

console.log("🌍 Using API base:", API_BASE);

export default API_BASE;
