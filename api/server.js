import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';

//dot env config
dotenv.config();

//database connection
connectDB();

//rest object
const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//route
//routes import
import testRoutes from './routes/testRoutes.js';
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
app.use('/api/v1', testRoutes);
app.use('/app/v1/user', userRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/cat", categoryRoutes);

app.get('/', (req, res) => {
    return res.status(200).send("<h1>API is running</h1>");
});

//port
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgMagenta.white);
});