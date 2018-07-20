const express = require('express');
const app = express();
const path = require('path');
const transmogrify = require('./server/routes/routes');
transmogrify(app);

app.use(express.static(__dirname + '/public/dist/public'));

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(5000);