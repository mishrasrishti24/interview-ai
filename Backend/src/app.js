const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// ✅ CORS FIRST (very important)
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://interview-ai-as8q.vercel.app"
    ],
    credentials: true
}));

// ✅ handle preflight requests
app.options("*", cors());

// ✅ then other middleware
app.use(express.json());
app.use(cookieParser());

/* require all the routes here */
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

/* using all the routes here */
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;