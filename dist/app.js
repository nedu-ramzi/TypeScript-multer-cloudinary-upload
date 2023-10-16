"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const main_config_1 = require("./config/main.config");
const upload_route_1 = require("./routes/upload.route");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
app.get('/', (req, res) => res.send('App Successfully Running'));
//route
app.use('/api/v1', upload_route_1.router);
server.listen(main_config_1.config.server.port, () => console.log(`Application Running on port ${main_config_1.config.server.port}`));
//# sourceMappingURL=app.js.map