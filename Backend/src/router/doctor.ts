import express from 'express';
import * as controller from '../controller/doctorController';
import { auth } from '../middlewares/auth';

const router = express.Router();

//* login
router.route('/login').post(controller.login);

//* appointments
router.route('/appointment/get-appointments/:id').get(auth, controller.getAppointments);
router.route('/appointment/cancel-appointment/:id').patch(controller.cancelAppointment);

//* get data
router.route('/get-doctor/:id').get(controller.getDoctor);
router.route('/edit-doctor/:id').patch(controller.editDoctor);
router.route('/patients/:id').get(controller.getPatients);

//* Add Prescription
router.route('/add-prescription').post(controller.addPrescription);

//* apply for Leave
router.route('/apply-leave').patch(controller.applyLeave);
router.route('/cancel-leave').patch(controller.cancelLeave);

//* analytics
router.route('/get-total-revenue/:id').get(controller.getTotalRevenue);
router.route('/get-monthly-revenue/:id').get(controller.getMontlyRevenue);

export default router;
