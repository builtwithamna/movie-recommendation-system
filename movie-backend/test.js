// Ye file test karne ke liye hai
require('dotenv').config();
const mongoose = require('mongoose');
const Movie = require('./models/Movie');

async function testDatabase() {
    try {
        console.log(' Database connection');
        
        // Database se connect karo
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Database connected');

        
        console.log('\n📝 adding movie');
        
        const newMovie = new Movie({
            title: 'Interstellar',
            genre: 'Sci-Fi',
            rating: 9.0,
            year: 2014,
            description: 'Space exploration movie by Christopher Nolan'
        });

        const savedMovie = await newMovie.save();
       
        console.log('   Title:', savedMovie.title);
        console.log('   Genre:', savedMovie.genre);
        console.log('   Rating:', savedMovie.rating);

       
        console.log('\n📽️ Database mein sab movies:');
        const allMovies = await Movie.find();
        
        allMovies.forEach((movie, index) => {
            console.log(`   ${index + 1}. ${movie.title} (${movie.year}) - ${movie.genre}`);
        });

        // GENRE KE HISAB SE FILTER
        console.log('\n🔬 Sirf Sci-Fi movies:');
        const sciFiMovies = await Movie.find({ genre: 'Sci-Fi' });
        sciFiMovies.forEach((movie) => {
            console.log(`   - ${movie.title} (Rating: ${movie.rating})`);
        });

        console.log('\n👋 disconnection...');
        await mongoose.disconnect();
        console.log('✅ Disconnected!');

    } catch (error) {
        console.error('❌ ERROR:', error.message);
        
    }
}

// Function call karo
testDatabase();