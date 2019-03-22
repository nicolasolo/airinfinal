const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const items = require('.routes/api/items'),


const app = express();


app.use(bodyParser.json());

app.use('/api/items', items);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', build, index.html));

    });
}

mongoose
    .connect('mongodb+srv://nicola:samsung330@cluster0-8t26p.mongodb.net/prova?retryWrites=true')
    .then(() => console.log('mongodb connected you fool'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Started on port ${port}`));