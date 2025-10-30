import express from "express";
import {
  deleteAppointment,
  getAllAppointments,
  postAppointment,
  updateAppointmentStatus,
} from "../controller/appointmentController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/post", isAuthenticatedAndAuthorized("patient"), postAppointment);
router.get("/getall", isAuthenticatedAndAuthorized("admin"), getAllAppointments);
router.put("/update/:id", isAuthenticatedAndAuthorized("admin"), updateAppointmentStatus);
router.delete("/delete/:id",isAuthenticatedAndAuthorized("admin"), deleteAppointment);

export default router;

// import express from "express";
// import {
//   deleteAppointment,
//   getAllAppointments,
//   postAppointment,
//   updateAppointmentStatus,
// } from "../controller/appointmentController.js";
// import {
//   isAdminAuthenticated,
//   isPatientAuthenticated,
// } from "../middlewares/auth.js";

// const router = express.Router();

// router.post("/post", isPatientAuthenticated, postAppointment);
// // only doctor and admin are allowed to get .......................
// router.get("/getall", isAdminAuthenticated, getAllAppointments);
// router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
// router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);

// export default router;
