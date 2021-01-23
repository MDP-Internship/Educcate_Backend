import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import LoginService from "../services/UserService"
import Helpers from "../../utils/helpers"
import { encrypText } from "../../src/config/settings"
import { registerValidate, loginValidate } from "../../utils/validate"

class UserController {
  static async register(req, res) {
    
    const reqFullBody = req.body
    const isHaveUser = await Helpers.isHaveUser(email)

    if (!isHaveUser) {
      const isRegisterValidateResult = registerValidate(reqFullBody)

      if (isRegisterValidateResult.type) {
        const password = await bcrypt.hash(cryptedPassword, 10)

        try {
          const userRes = await LoginService.register(req.body, password, req.headers.rate_id)

          res.json({ type: true, data: userRes._previousDataValues })
        } catch (err) {
          console.log(err)
          return res.json({ type: false, message: err })
        }
      }
      res.json(isRegisterValidateResult.error)
    }
   
  }

  static async login(req, res) {
    const { email, password } = req.body
    const reqFullBody = req.body
    const isLoginValidateResult = loginValidate(reqFullBody)
    console.log(isLoginValidateResult.type)
    if (isLoginValidateResult.type) {
      const userRes = await LoginService.login(email)

      if (!userRes) {
        return res.json({ status: "error", error: "user not found" })
      }
      if (await bcrypt.compare(password, userRes.password)) {
        const token = jwt.sign(
          {
            id: userRes.id,
            name: userRes.name,
            email: userRes.email,
            roleId: userRes.roleId,
            isRemoved: userRes.isRemoved,
          },
          encrypText,
          { expiresIn: 84600 }
        )
        console.log(token)
        return res.json({ type: true, token: token })
      }
      res.json({ error: "e-mail and password incorrect" })
    }
    res.json(isLoginValidateResult.error)
  }

  

}

export default UserController
