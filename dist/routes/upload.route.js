"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_middleware_1 = require("../middleware/multer.middleware");
exports.router = (0, express_1.Router)();
exports.router.post('/upload', multer_middleware_1.handler);
//# sourceMappingURL=upload.route.js.map