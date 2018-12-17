// import express from 'express';
// import path from 'path';

// const app = express();

// app.get('/helloworld', (req, res) => {
//     res.send('Hello World');
// });

// app.use(express.static('public'));

// const server = app.listen(3000, () => {
//     console.log(`Server listening on port %d`, server.address().port);
// });

import express from 'express';
import configLite from 'config-lite';
import router from './routes/index.js';
import cookieParser from 'cookie-parser'
import session from 'express-session';
import connectMongo from 'connect-mongo';
import history from 'connect-history-api-fallback';
import chalk from 'chalk';

const app = express();
const config = configLite({
    config_basedir: __dirname,
    config_dir: 'config'
});
const MongoStore = connectMongo(session);

app.use(cookieParser());
app.use(session({
    name: config.session.name,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: config.session.cookie,
    store: new MongoStore({url: config.url}),
}));

router(app);

app.use(history());
app.use(express.static('./public'));
app.listen(config.port, () => {
    console.log(chalk.green(`成功监听端口：${config.port}`));
});
