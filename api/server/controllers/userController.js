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

        res.json({ type: true, data: userRes._previousDataValues })
      } catch (err) {
        console.log(err)
        return res.json({ type: false, message: err })
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
        return res.json({ type: true, token: token })
      }
      res.json({ error: "e-mail and password incorrect" })
    }
    res.json(isLoginValidateResult.error)
  }

  static async userGetAll(req, res) {
    const getAllResult = await LoginService.getAll()
    const data = getAllResult.map((i) => {
      return {
        id: i.id,
        name: i.name,
        surname: i.surname,
        email: i.email,
        roleId: i.roleId,
      }
    })
    res.json(data)
  }

  static async updateUserInfo(req, res) {
    const { id, name, surname, email, roleId } = req.body
    const updateUser = await LoginService.updateUser(
      id,
      name,
      surname,
      email,
      roleId
    )
    console.log(updateUser)
    if (!updateUser) {
      res.json({
        type: false,
        message: "kullanıcı bulunamadı",
      })
    }
    res.json({ type: true, message: "güncelleme işlemi başarılı" })
  }

  static async deleteUser(req, res) {}
}

export default LoginController
