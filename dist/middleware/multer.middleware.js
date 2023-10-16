"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const multer_1 = __importDefault(require("multer"));
const cloudinary_helpers_1 = require("../helpers/cloudinary.helpers");
const upload = (0, multer_1.default)({ dest: "./uploads" });
const myUploadMiddleware = upload.single('sample_file');
function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (error) => {
            if (error instanceof Error) {
                return reject(error);
            }
            return resolve(error);
        });
    });
}
const handler = async (req, res) => {
    try {
        await runMiddleware(req, res, myUploadMiddleware);
        const cldRes = await (0, cloudinary_helpers_1.handleUpload)(req.file.path);
        res.json(cldRes);
        console.log(cldRes, 'uploaded successfully');
    }
    catch (error) {
        console.log(error, 'there is a problem');
        res.send({ message: error.message });
    }
};
exports.handler = handler;
//# sourceMappingURL=multer.middleware.js.map