import { Request, Response } from 'express';
import { BLOG, DEPARTMENT, DOCTOR } from '../model/index';
import { Ioptions } from '../Types/interface';

//* Get-all-blogs
export const getAllBlogs = async (req: Request, res: Response) => {
    try {
        const { page } = req.query;
        
        const options: Ioptions = {
            page: Number(page) || 1,
            limit: 12,
        };
        
        const data = await BLOG.paginate({}, options);
        
        res.status(200).send({ success: true, message: 'get all blog successfull', data });
    } catch (error) {
        console.log('Error in common controller: Get-All-blogs :-', error);
        res.status(500).send({ success: false, message: 'Internal server error' });
    }
};

//* Get-single-blogs
export const getBlogs = async (req: Request, res: Response) => {
    try {
        const id = req.params;
        
        const blog = BLOG.find({ _id: id });
        
        return res.status(200).send({ success: true, message: 'get blog successful', data: blog });
    } catch (error) {
        console.log('Error in common controller: Get-blog :-', error);
        return res.status(500).send({ success: false, message: 'Internal server error' });
    }
};

//* Get-all-doctors
export const getAllDoctors = async (req: Request, res: Response) => {
    try {
        const { page } = req.query;
  
      const options: Ioptions = {
        page: Number(page) || 1,
        limit: 12,
      };
      const data = await DOCTOR.paginate({}, options);
  
      return res.status(200).send({ success: true, message: 'get all Doctors Successful', data });
    } catch (error) {
      console.log('Error in common contoller - Get-all-doctors :-', error);
      return res.status(500).send({ success: true, message: 'Internal Server Error' });
    }
};
  
//* Get-all-departments
export const getDepartments = async (req: Request, res: Response) => {
    try {
      const department = await DEPARTMENT.find({});
      return res.status(200).send({ success: true, message: 'get department successful', data: department });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ success: true, message: 'Internal Server Error' });
    }
};

//* Get-search-doctors
export const searchDoctors = async (req: Request, res: Response) => {
    try {
        
        const { keyword } = req.query;
        let regex = null;
        if(keyword !== undefined){
            regex = new RegExp(keyword.toString(), 'i');
        }
        
        const result = await DOCTOR.find({ firstName: { $regex: regex } });
      return res.status(200).send({ success: true, message: 'search doctor successful', result });
    } catch (error) {
      console.log(error);
      return res.status(500).send({ success: true, message: 'Internal Server Error' });
    }
};
