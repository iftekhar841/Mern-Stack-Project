const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Mern-Stack', {
        useNewUrlParser: true,
        useUnifiedTopology: true
});


const userRoutes = require("./routes/route")

app.use('/api/register_users',userRoutes);


app.listen(5030 , ()=>{
        console.log('Server is running on the port no: 5030');
});