const stockpurchasercontroller=require("./controllers/Stockpurchasercontroller")
const admincontroller=require("./controllers/admincontroller")
const express=require("express")
const router =express.Router()
//job seeker routes
router.post("/insertstockpurchaser",stockpurchasercontroller.insertstockpurchaser)
router.post("/checkstockpurchaserlogin",stockpurchasercontroller.checkstockpurchaserlogin)
//admin routes
router.get("/viewstockmembers",admincontroller.viewstockmembers)
router.delete("/deletestockpurchaser/:email",admincontroller.deletestockpurchaser)
router.post("/checkadminlogin",admincontroller.checkadminlogin)


module.exports = router