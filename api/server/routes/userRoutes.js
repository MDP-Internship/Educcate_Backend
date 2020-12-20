import { Router } from "express"
import userController from "../controllers/userController"

const router = Router()

router.post("/register", userController.register)
router.post("/login", userController.login)
router.get("/getAll", userController.userGetAll)
router.put("/edit/:id", userController.updateUserInfo)
router.put("/delete/:id", userController.deleteUser)

export default router
