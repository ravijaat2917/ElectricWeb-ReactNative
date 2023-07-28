import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {connectDb} from './db/connectdb.js';
import userRoutes from './Routes/user.Routes.js';


const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

connectDb(process.env.DATABASE_URI);

const PORT = 8080 || process.env.PORT;

app.use('/api/v1',userRoutes);
app.use('/*', (req, res) => res.send('Welcome to Electric Web App'));

app.listen(PORT, () => {
    console.log(`App Listen on Port ${PORT}`);
});