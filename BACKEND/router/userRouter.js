import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controller/userController.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAuthenticatedAndAuthorized("admin"), addNewAdmin);
router.post("/doctor/addnew", isAuthenticatedAndAuthorized("admin"), addNewDoctor);
router.get("/doctors", getAllDoctors);
router.get("/patient/me", isAuthenticatedAndAuthorized("patient"), getUserDetails);
router.get("/admin/me",isAuthenticatedAndAuthorized("admin"), getUserDetails);
router.get("/patient/logout", isAuthenticatedAndAuthorized("patient"), logoutPatient);
router.get("/admin/logout", isAuthenticatedAndAuthorized("admin"), logoutAdmin);

export default router;

// import express from "express";
// import {
//   addNewAdmin,
//   addNewDoctor,
//   getAllDoctors,
//   getUserDetails,
//   login,
//   logoutAdmin,
//   logoutPatient,
//   patientRegister,
// } from "../controller/userController.js";

// import {
//   isAdminAuthenticated,
//   isPatientAuthenticated,
// } from "../middlewares/auth.js";

// const router = express.Router();

// router.post("/patient/register", patientRegister);
// router.post("/login", login);
// router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
// router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);
// router.get("/doctors", getAllDoctors);

// // middleware check karega ki jo url access karega wo  user  data me present hai ya nhi..............
// router.get("/patient/me", isPatientAuthenticated, getUserDetails);
// router.get("/admin/me", isAdminAuthenticated, getUserDetails);
// router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
// router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);

// export default router;
