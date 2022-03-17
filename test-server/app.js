const express = require('express');
const app = express();
const places = require('./routes/places');
const cors = require('cors')

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/locations', places);

app.listen(3000, ()=>{
    console.log('Server listening on port 3000');
})