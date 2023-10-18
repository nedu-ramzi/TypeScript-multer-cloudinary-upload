import express from 'express';
import http from 'http';
import { config } from './config/main.config';
import appRouter from './routes/index';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import morgan from 'morgan';

const app = express();
const server = http.createServer(app);

//middleware 
app.use(compression());
app.use(helmet());
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(morgan('dev'));

//database
config.database();

//route
app.get('/', (req, res) => res.send('App Successfully Running'));
app.use('/api/v1', appRouter);

//server port 
server.listen(config.server.port, () => console.log(`Application Running on port ${config.server.port}`));