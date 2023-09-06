import express  from 'express'
const app = express()
const port = 1337
import path from 'path'; 
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/testPage.html'));
})

app.get('/picture', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '/backPic.png'));
})

app.get('/plus', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '/plus.png'));
})
app.get('/minus', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '/minus.png'));
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})