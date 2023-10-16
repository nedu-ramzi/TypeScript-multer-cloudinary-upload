"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.config = {
    server: {
        port: parseInt(process.env.PORT, 10),
        mode: process.env.NODE_ENV,
    },
};
//# sourceMappingURL=main.config.js.map