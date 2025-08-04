import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// App Config
const app = express();
const PORT = 4000;


// Initialize Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.get('/', (req, res) => res.send("API Working"));



// Start Server
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));


