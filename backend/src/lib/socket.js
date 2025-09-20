import { Server } from "socket.io";
import http from "http";
import express from "express";
import { ENV } from "./env.js";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

const app = express();
const server = http.createServer(app);

const allowedOrigin =
    ENV.NODE_ENV === "development"
        ? ENV.CLIENT_URL
        : process.env.VITE_API_URL || "https://chatly-frontend-three.vercel.app/";

const io = new Server(server, {
    cors: {
        origin: allowedOrigin,
        credentials: true,
    },
});

io.use(socketAuthMiddleware);

const userSocketMap = {};

io.on("connection", (socket) => {
    console.log("A user connected", socket.user.fullName);

    const userId = socket.userId;
    userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("A user disconnected", socket.user.fullName);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export function getReceiverSocketId(userId) {
    return userSocketMap[userId];
}

export { io, app, server };
