import db from "../../src/models"

class AdminService {
  static async updateUser(
    id,
    name,
    surname,
    email,
    currency_level,
    basket,
    credit,
    roleId
  ) {
    try {
      const userUpdate = await db.User.update(
        { name, surname, email, currency_level, basket, credit, roleId },
        { where: { id } }
      )

      return userUpdate
    } catch (error) {
      throw error
    }
  }
  static async deleteUser(id) {
    try {
      const user = await db.User.findOne({ where: { id } })

      if (user) {
        return await db.User.update(
          { isRemoved: 1 },
          { where: { id: user.id } }
        )
      }
      return 0
    } catch (err) {
      throw err
    }
  }
  static async createRate(data) {
    try {
      const rate = await db.Rate.create(data)
      if (rate) {
        return rate
      }
      return {
        status: false,
        message: "Kur eklenirken hata oluştu",
      }
    } catch (error) {
      throw err
    }
  }

  static async updateRate(data, id) {
    try {
      const updatedRate = await db.Rate.update(data, { where: { id } })
      return updatedRate
    } catch (error) {
      throw error
    }
  }
}
export default AdminService
