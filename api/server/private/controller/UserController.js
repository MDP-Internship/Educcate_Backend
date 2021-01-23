
import UserService from "../service/UserService"
import Helpers from "../../utils/helpers"
import { encrypText } from "../../src/config/settings"


class UserController {

  static async getRates(req, res) {
    try {
      const result = await UserService.getRate(req.decoded.id)
      res.json({
        type: true,
        message: "Tüm kur bilgileri getirildi",
        data: result,
      })
    } catch (error) {
      res.json(error)
    }
  }

  static async userGetAll(req, res) {
    const getAllResult = await UserService.getAll()
    res.json(getAllResult)
  }
  static async getAllRate(req, res) {
    try {
      const result = await UserService.getAllRate()
      res.json({
        type: true,
        message: "Tüm kur bilgileri getirildi",
        data: result,
      })
    } catch (error) {
      res.json(error)
    }
  }



}

export default UserController
