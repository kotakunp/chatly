import axios from "axios";

const BASE_URL =
    import.meta.env.MODE === "development"
        ? "http://localhost:3000/api"
        : import.meta.env.VITE_API_URL || "https://chatly-k7xjc.sevalla.app/api";

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});