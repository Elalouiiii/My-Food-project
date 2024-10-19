import express from 'express';
import bodyParser from "body-parser";
import foodRoutes from './routes/foodRoutes.js'
import connectedDB from './config/dbconfigue.js';
import cors from 'cors'



const corsOptions = {
    origin: 'http://localhost:5173',
}

const app = express();
const port = 4444;

app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use(foodRoutes)
















connectedDB()
app.listen(port, () => {
    console.log(`hello http://localhost:${port}`);
})