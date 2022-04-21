const express = require('express');
const app = express()
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('Marvin Gray');
});

app.listen(port, () => {
    console.log(`Running on Port ${port}`);
});
//test