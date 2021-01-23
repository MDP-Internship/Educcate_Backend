import { Router } from "express"
import PrivateController from "../controller/UserController"

const router = Router()


router.get("/getAll", PrivateController.userGetAll)
router.get("/rateGet", PrivateController.getRates)
router.get("/getAllRate", PrivateController.getAllRate)
router.get("/userRate/:id", PrivateController.getUserRate)




export default router
