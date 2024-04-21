const express = require("express");
const APIError = require("./Libra/config/app-error");
const adminRouter = require("./Libra/routes/admin.route");
const userRouter = require("./Libra/routes/user.route");

const app = express();

app.use(express.json());

// Simplest Route
app.get("/", (req, res) => {
    res.json({
        message: "hello"
    });
});

// Route to Admin Site
app.use("/admin", adminRouter);

// Route to User Site
app.use("/api/user", userRouter);

// Control Error: 404 and 500
app.use((req, res, next) => {
    return next(new APIError(404, "Resource not found"));
});

app.use((err, req, res, next) => {

    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

module.exports = app;