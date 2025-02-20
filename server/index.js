require("dotenv").config();
const express = require("express");
const blogRouter = require("./routes/blogRoutes");
const { connectDB } = require("./config/db");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appArror");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use("/api/blogs", blogRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`This route ${req.originalUrl} doesn't exist.`, 404));
});

app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
