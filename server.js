import { createRequestHandler } from "@react-router/serve";
import express from "express";

const app = express();

// Serve static assets from the client build
app.use(express.static("build/client"));

// Handle all routes with React Router
app.all("*", createRequestHandler());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
