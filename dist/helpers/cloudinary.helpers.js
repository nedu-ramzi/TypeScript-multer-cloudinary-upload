"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUpload = void 0;
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});
async function handleUpload(file) {
    const res = await cloudinary_1.v2.uploader.upload(file, { folder: "Test", resource_type: "auto" });
    return res;
}
exports.handleUpload = handleUpload;
//# sourceMappingURL=cloudinary.helpers.js.map