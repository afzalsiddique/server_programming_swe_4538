const express = require("express");
const router = express.Router();

const {
  ensureAuthenticated,
  addUserData,
} = require("../middlewares/auth.middleware");

const {
  getCP,
  postCP,
  getCPList,
  deleteCP,
  paymentDoneCP,
  selectCP,
  editCP,
  postEditCP,
} = require("../controllers/programmingContest.controller");

router.get("/register", ensureAuthenticated, addUserData, getCP);
router.post("/register", ensureAuthenticated, addUserData, postCP);

router.get("/list", ensureAuthenticated, addUserData, getCPList);
router.get("/delete/:id", ensureAuthenticated, addUserData, deleteCP);
router.get("/paymentDone/:id", ensureAuthenticated, addUserData, paymentDoneCP);
router.get("/select/:id", ensureAuthenticated, addUserData, selectCP);
router.get("/edit/:id", ensureAuthenticated, addUserData, editCP);
router.post("/edit/:id", ensureAuthenticated, addUserData, postEditCP);

module.exports = router;
