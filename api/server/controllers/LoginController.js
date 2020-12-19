import Util from "../utils/Util"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import LoginService from "../services/LoginService"
import { registerValidate, loginValidate } from "../utils/validate"
import user from "../src/models/user"

const util = new Util()

class LoginController {
  static async register(req, res) {
    console.log(req.body)
    const { name, surname, email, password: cryptedPassword, roleId } = req.body
    const reqFullBody = req.body
    const isRegisterValidateResult = registerValidate(reqFullBody)

    if (isRegisterValidateResult.res) {
      const password = await bcrypt.hash(cryptedPassword, 10)
      try {
        const userRes = await LoginService.register(
          name,
          surname,
          email,
          password,
          roleId
        )

        res.json(userRes._previousDataValues)
      } catch (err) {
        console.log(err)
        return res.json({ status: "error" })
      }
    }
    res.json(isRegisterValidateResult.error)
  }

  static async login(req, res) {
    const { email, password } = req.body
    const reqFullBody = req.body
    const isLoginValidateResult = loginValidate(reqFullBody)
    console.log(isLoginValidateResult.res)
    if (isLoginValidateResult.res) {
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
          },
          "secret key",
          { expiresIn: 1000 }
        )
        console.log(token)
        return res.json({ status: "ok", token: token })
      }
      res.json({ error: "e-mail and password incorrect" })
    }
    res.json(isLoginValidateResult.error)
  }

  static async changePassword(req, res) {
    const { email, password } = req.body
  }
}

export default LoginController
