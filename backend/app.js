import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import router from './src/middlewares/routes.mdw.js';

config();

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//add router
router(app);

app.get('/', (req, res) => {
    res.send('Hello');
});

const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
    console.log(`Server run and listening at http://localhost:${PORT}`);
});
