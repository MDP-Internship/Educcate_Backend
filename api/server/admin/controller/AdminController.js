import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { encryptText } from "../../src/config/settings"
import AdminService from "../services/AdminService"

class AdminController {
  static async updateUserInfo(req, res) {
    const { id } = req.params
    const { name, surname, email, roleId, credit, basket } = req.body

    const updateUser = await AdminService.updateUser(
      id,
      name,
      surname,
      email,
      roleId,
      credit,
      basket
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

  
}

export default AdminController
