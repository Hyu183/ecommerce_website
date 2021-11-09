import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Server run at http://localhost:${PORT}`);
});
