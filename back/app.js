import express from 'express';
import configLite from 'config-lite';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import chalk from 'chalk';
import bodyParser  from 'body-parser';

import './mongodb';

const app = express();
const config = configLite({
    config_basedir: __dirname,
    config_dir: 'config',
});
const MongoStore = connectMongo(session);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(session({
    name: config.session.name,
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
    cookie: config.session.cookie,
    store: new MongoStore({url: config.url}),
}));

console.log('node_env: ', process.env.NODE_ENV, process.env.ENV_ORIGIN)

router(app);
app.listen(config.port, () => {
    console.log(chalk.green(`成功监听端口：${config.port}`));
});
