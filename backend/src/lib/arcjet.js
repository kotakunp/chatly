import { ENV } from "./env.js";
import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";

const aj = arcjet({
    key: ENV.ARCJET_KEY,
    rules: [
        shield({ mode: ENV.NODE_ENV === "production" ? "LIVE" : "DRY_RUN" }),
        detectBot({
            mode: ENV.NODE_ENV === "production" ? "LIVE" : "DRY_RUN",
            allow: ["CATEGORY:SEARCH_ENGINE"],
        }),
        slidingWindow({
            mode: ENV.NODE_ENV === "production" ? "LIVE" : "DRY_RUN",
            max: 100,
            interval: 60,
        }),
    ],
});

export default aj;