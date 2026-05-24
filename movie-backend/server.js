require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');  


const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Database connected successfully!');
        console.log('📀 Connected to:', process.env.MONGO_URI);
    })
    .catch((error) => {
        console.log('❌ Database connection failed:', error.message);
    });

    app.get('/', (req,res) =>{
    res.send('my movie server is working')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => {
   console.log(`Server running on http://localhost:${PORT}`);
});