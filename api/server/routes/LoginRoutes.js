import { Router } from "express"
import LoginController from "../controllers/LoginController"

const router = Router()

router.post("/register", LoginController.register)
router.post("/login", LoginController.login)
router.post("/change-password", LoginController.changePassword)

export default router
