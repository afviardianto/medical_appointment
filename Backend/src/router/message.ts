import { Router } from 'express';
import * as controller from '../controller/messageController';

const router = Router();

router.route('/').post(controller.newMessage);
router.route('/:id').get(controller.getMessage);

export default router;
