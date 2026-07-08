
const exporess = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose')

env.config();

const app = exporess();



const PORT = process.env.PORT || 3000;

app.get('/api/home', (req, res) => {
    res.send('Hello World!');
});



const startServer = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log('Unable to connect to DB', error);
        process.exit(1);
    }
};

startServer();