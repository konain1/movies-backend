
const exporess = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const mongoose = require('mongoose')
const movieRoutes = require('./routes/movie.route')
const theaterRoutes = require('./routes/theater.route')



env.config();

const app = exporess();



const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

movieRoutes(app);
theaterRoutes(app);

app.get('/api/home', (req, res) => {
    res.send('Hello World!');
});



const startServer = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to MongoDB');

        // const movie = await moivesModel.create({
        //     name: "harrypotter",
        //     description: "magical journey of little boy from resorio",
        //     casts: ["daniel", "emma", "snape"],
        //     trailerUrl: "trailerurl",
        //     releaseDate: "20-12-2025",
        //     director: "jk rolling",
        // });
        // console.log('Movie created:', movie._id);

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.log('Unable to connect to DB or create movie', error);
        process.exit(1);
    }
};

startServer();