import UserService from "../service/UserService"
import Helpers from "../../utils/helpers"
import { encrypText } from "../../src/config/settings"
import { date } from "joi"

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

  static async getRate(req,res){
    try {
      const {id} =  req.params
      const result = await  UserService.gettRate(id)
      res.json({
        type: true,
        data:result
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

  static async getRateUser(req, res) {
    try {
      const result = await UserService.getRateUser(req.params.id)
      res.json({
        type: true,
        data: result,
      })
    } catch (error) {
      res.json(error.message)
    }
  }

  static async userRate(req, res){
    try {
      const result = await UserService.getUserRate(req.decoded.id)
      res.json({
        type: true,
        data: result
      })
    } catch (error) {
      res.json(error)
    }
  }

  static async buyRate(req, res) {
    try {
      const result = await UserService.buyRate(req.params.id, req.decoded.id)
      res.json({
        type: result.type,
        message: result.message,
      })
    } catch (error) {
      res.json(error)
    }
  }

  static async getUser(req, res){
    try {
      const result =  await UserService.getUser(req.decoded.id)
      res.json({
        type: true,
        data: result
      })
    } catch (error) {
      res.json(error)
    }
  }
}

export default UserController
