const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

// ✅ CORS FIRST
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://interview-ai-as8q.vercel.app"
    ],
    credentials: true
}));

// ✅ FIXED preflight handler
app.options("/*", cors());

// ✅ other middleware
app.use(express.json());
app.use(cookieParser());

// routes
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;