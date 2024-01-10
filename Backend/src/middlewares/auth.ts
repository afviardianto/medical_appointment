import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import * as exportJs from '../model/index';
//import RequestDefenition from '../defenitions';

dotenv.config();
export const SECRET_KEY: Secret = process.env.JWT_SECRET || '';

export interface RequestDefenition extends Request {
    user: { id: string; };
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const token = req.header('Authorization')?.split(' ')?.[1];
        if (!token) return res.status(401).send({ success: false, message: 'Missing Token' });
        
        //const decoded = jwt.verify(token, SECRET_KEY);
        //(req as UserRequest).token = decoded;

        const decoded = jwt.verify(token, SECRET_KEY) as JwtPayload;
        if (!decoded || !decoded.id) {
            return res.status(401).send({ success: false, message: 'Invalid Token' });
        }

        const user = await exportJs.USER.findById(decoded.id).exec();
        if (!user) {
            return res.status(401).send({ success: false, message: 'User not found' });
        }
        
        (req as RequestDefenition).user = { id: decoded.id };
        //req.user = { id: decoded.id };
        next();

    }catch (error) {
        console.error('Error in auth midleware :- ', error);
        res.status(500).send({ success: false, message: 'Internal Server Error' });
    }
};

//export default auth;

