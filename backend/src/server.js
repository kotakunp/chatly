import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

// const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;

app.use(express.json({ limit: "5mb" }));

const allowedOrigin =
    ENV.NODE_ENV === "development"
        ? ENV.CLIENT_URL
        : process.env.FRONTEND_URL || "https://chatly-frontend-three.vercel.app/";

app.use(
    cors({
        origin: allowedOrigin,
        credentials: true,
    })
);


app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

/* if (ENV.NODE_ENV === "production") {
    const staticPath = path.join(__dirname, "../../frontend/dist");
    console.log("Serving static files from:", staticPath);

    app.use(express.static(staticPath));

    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    });
} */

server.listen(PORT, async () => {
    console.log("Server running on port: " + PORT);
    await connectDB();
});