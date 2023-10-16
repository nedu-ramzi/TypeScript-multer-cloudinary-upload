import { v2 as cloudinary } from "cloudinary";


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

export async function handleUpload(file: string) {
    const res = await cloudinary.uploader.upload(file, { folder: "Test", resource_type: "auto" });

    return res;
}
