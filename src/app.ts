import express from 'express';
import http from 'http';
import { config } from './config/main.config';
import { appRouter } from './routes/upload.route';

const app = express();
const server = http.createServer(app)

app.get('/', (req, res) => res.send('App Successfully Running'));

//route
app.use('/api/v1', appRouter)
server.listen(config.server.port, () => console.log(`Application Running on port ${config.server.port}`));