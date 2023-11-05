const express = require('express');


const app = express();


app.get('/', (req, res) => {
    res.send({ message: "running" });
});

app.listen(3000, () => {
    console.log('port running on 3000');
});