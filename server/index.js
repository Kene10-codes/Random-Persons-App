const express = require('express');
const axios = require('axios');
const path = require('path');
const port = process.env.PORT || 3000;
// const cors = require('cors');
const { response } = require('express');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')));

// app.use(cors());

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get('/users', (req, res) => {
    axios.get('https://randomuser.me/api/?page=1&results=20')
     .then(response => {
        res.send(response.data);
    });
});

app.listen(port, () => {
    console.log(`server is runing on port ${port}`);
})