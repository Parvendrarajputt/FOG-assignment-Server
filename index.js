import express from 'express';
import router from './Route/productRoute.js';  // Ensure the correct case and extension
const app = express();
const PORT = 8000;

app.use(express.json());  // Middleware to parse JSON
app.use(router);  // Register the router

app.get("/", (req, res) => {
  res.send("Server is running on port 8000");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
