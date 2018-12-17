import express from 'express';
import path from 'path';

const app = express();

app.get('/helloworld', (req, res) => {
    res.send('Hello World');
});

app.use(express.static('public'));

const server = app.listen(3000, () => {
    console.log(`Server listening on port %d`, server.address().port);
});
