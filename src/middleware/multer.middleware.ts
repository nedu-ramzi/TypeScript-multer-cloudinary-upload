import multer from "multer";
import { handleUpload } from "../helpers/cloudinary.helpers";
import { Request, Response } from 'express';

const upload = multer({ dest: "./uploads" });
const myUploadMiddleware = upload.single('sample_file');

function runMiddleware(req: Request, res: Response, fn: any) {
    return new Promise((resolve, reject) => {
        fn(req, res, (error: Error) => {
            if (error instanceof Error) {
                return reject(error);
            }
            return resolve(error);
        });
    });
}

export const handler = async (req: Request, res: Response) => {
    try {
        await runMiddleware(req, res, myUploadMiddleware);
        const cldRes = await handleUpload(req.file.path);
        res.json(cldRes);
        console.log(cldRes, 'uploaded successfully');

    } catch (error) {
        console.log(error, 'there is a problem');
        res.send({ message: error.message })
    }
}

