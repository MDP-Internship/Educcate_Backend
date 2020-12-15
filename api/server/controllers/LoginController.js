import Util from "../utils/Util"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import LoginService from "../services/LoginService"
import user from "../src/models/user"

const util = new Util()

class LoginController {
  static async register(req, res) {
    console.log(req.body)
    const { name, surname, email, password: cryptedPassword, roleId } = req.body
    if (!email || !cryptedPassword) {
      return res.json({ err: "email ve ya sifre bos" })
    }
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

  static async login(req, res) {
    const { email, password } = req.body

    const userRes = await LoginService.login(email)

    if (!userRes) {
      return res.json({ status: "error", error: "user not found" })
    }
    if (await bcrypt.compare(password, userRes.password)) {
      const token = jwt.sign(
        { id: userRes.id, name: userRes.name, email: userRes.email },
        "secret key",
        { expiresIn: 1000 }
      )
      console.log(token)
      return res.json({ status: "ok", data: token })
    }

    /* if (!userRes) {
      res.json({ error: "user not found" })
    } */
  }
}

export default LoginController
