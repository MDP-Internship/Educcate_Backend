import db from "../../src/models"

class AdminService {
  static async updateUser(id, name, surname, email, roleId) {
    try {
      const userUpdate = await db.User.update(
        { name, surname, email, roleId },
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
  static async createRate(data){
    try {
      const rate =  await db.Rate.create(data)
      if (rate) {
        return rate;
      }
      return {
        status : false,
        message : 'Kur eklenirken hata oluştu'
      }
    } catch (error) {
      throw err;
    }
  }

  
}
export default AdminService
