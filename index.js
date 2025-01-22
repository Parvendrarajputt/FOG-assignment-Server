import express from 'express';
import router from './Route/productRoute.js';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());

app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send(`Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
