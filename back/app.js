const express = require('express');
const path = require('path');
const app = express();


app.get('/helloworld', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/loadingStyle.css'));
});

app.use(express.static('public'));

const server = app.listen(3000, () => {
    console.log(`Server listening on port %d`, server.address().port);
});
