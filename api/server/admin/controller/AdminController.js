import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { encryptText } from "../../src/config/settings"
import AdminService from "../services/AdminService"
import db from "../../src/models"

class AdminController {
  static async updateUserInfo(req, res) {
    const { id } = req.params
    const {
      name,
      surname,
      email,
      currency_level,
      basket,
      credit,
      roleId,
    } = req.body

    const updateUser = await AdminService.updateUser(
      id,
      name,
      surname,
      email,
      currency_level,
      basket,
      credit,
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

  static async deleteUser(req, res) {
    const { id } = req.params

    const deleteUser = await AdminService.deleteUser(id)
    if (!deleteUser) {
      res.json({
        type: false,
        message: "User is not found",
      })
    }
    res.json({
      type: true,
      message: "user is delete",
    })
  }

  static async addRate(req, res) {
    const result = await AdminService.createRate(req.body)
    if (!result) {
      res.json({
        type: false,
        message: "Kur eklenirken hata oluştu",
      })
    }
    res.json({
      type: true,
      message: "Kur Eklendi",
      data: result,
    })
  }

  static async updateRate(req, res) {
    const body = req.body
    const { id } = req.params
    const data = {
      name: body.name,
      rate_hour: body.rate_hour,
      teacher_name: body.teacher_name,
      limit: body.limit,
      price: body.price,
    }
    const result = await AdminService.updateRate(data, id)
    if (!result) {
      res.json({
        type: false,
        message: "Kur güncellenirken hata oluştu",
      })
    }
     const updatedRate = await db.Rate.findOne({where:{id}})
    res.json({
      type: true,
      message: "Kur Güncellendi",
      data:updatedRate
    })
  }
}

export default AdminController
