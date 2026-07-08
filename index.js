
const exporess = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');


env.config();

const app = exporess();



const PORT = process.env.PORT || 3000;

app.get('/api/home', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});