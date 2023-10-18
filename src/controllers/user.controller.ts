import { Request, Response } from 'express';
import { User } from '../models/users.model';
import { ApplicationError } from '../helpers/errors.helpers';


export const register = async (req: Request, res: Response) => {
    try {
        const { fullname, username, email, phone } = req.body;

        const emailExist = await User.findOne({ email });
        if (emailExist) {
            throw new ApplicationError('Email already registered', 422);
        }

        const user = await User.create({ fullname, username, email, phone });
        user.save();

        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: {
                user: user
            }
        });
    } catch (error: any) {
        return res.json({
            success: false,
            error: {
                message: error.message,
                code: error.code
            }
        });
    }

}

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const user = await User.find();

        return res.status(200).json({
            success: true,
            message: 'Users selected successfully',
            data: {
                user: user
            }
        });
    } catch (error) {
        return res.json({
            success: false,
            error: {
                message: error.message,
                code: error.code
            }
        });
    }

}

export const updateUser = async (req: Request, res: Response)=>{
    
}