const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.urlencoded( {extended : false}));
app.use(express.json());

app.get('/', async(req, res) => {
    try {
        res.json('val');
    } catch(err) {
        res.json(err);
    }
})

app.listen( port, () => {
    console.log(`server is listening on port ${port}`);
})