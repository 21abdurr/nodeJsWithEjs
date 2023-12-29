import express from 'express';
const app = express();

const port = 3000;
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.get('/', (req, res) => {
    res.sendFile('./pages/index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
    res.sendFile('./pages/about.html', { root: __dirname });
})

app.get('/contact', (req, res) => {
    res.sendFile('./pages/contact.html', { root: __dirname });
})

app.get('/contact/:id', (req, res) => {
    res.send(`Contact ${req.params.id}`);
    console.log(req.params);
})

app.get('*', (req, res) => {
    res.status(404);
    res.sendFile('./pages/404.html', { root: __dirname });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})