import { Router } from "express"
import PrivateController from "../controller/UserController"

const router = Router()


router.get("/getAll", PrivateController.userGetAll)
router.get("/rateGet", PrivateController.getRates)
router.get("/getUser", PrivateController.getUser)
router.get("/getRateInfo/:id", PrivateController.getRate)
router.get("/getAllRate", PrivateController.getAllRate)
router.get("/rateUser/:id", PrivateController.getRateUser)
router.get("/buyRate/:id", PrivateController.buyRate)
router.get("/userRate", PrivateController.userRate)
router.put("/amount/:number", PrivateController.updateAmount)





export default router
