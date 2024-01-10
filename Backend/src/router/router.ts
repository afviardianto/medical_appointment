import express from 'express';
import * as controller from '../controller/controllers';

const router = express.Router();

//* blogs
router.route('/blogs/get-all-blogs').get(controller.getAllBlogs);
router.route('/blogs/get-blog/:id').get(controller.getBlogs);

//* department
router.route('/get-department').get(controller.getDepartments);

//*doctor
router.route('/get-doctors').get(controller.getAllDoctors);
router.route('/search-doctors').get(controller.searchDoctors);

export default router;
