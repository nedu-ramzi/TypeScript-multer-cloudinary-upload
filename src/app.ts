import express from 'express';
import http from 'http';
import {config} from './config/main.config';
import {router} from './routes/upload.route';

const app = express();
const server = http.createServer(app)


//route
app.use('/api/v1', router)
server.listen(config.server.port, ()=> console.log(`Application Running on port ${config.server.port}`));