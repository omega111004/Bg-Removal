import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';

// App Config
const app = express();
const PORT = 4000;


// Initialize Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.get('/', (req, res) => res.send("API Working Successfully!"));
app.use('/api/user',userRouter)



// Start Server
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));