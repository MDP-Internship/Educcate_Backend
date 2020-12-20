import db from "../src/models"

class LoginService {
  static async register(name, surname, email, password, roleId) {
    try {
      return await db.User.create({ name, surname, password, email, roleId })
    } catch (err) {
      throw err
    }
  }
  static async login(email) {
    try {
      const findUser = await db.User.findOne({ where: { email } })
      return findUser
    } catch (err) {
      throw err
    }
  }

  static async getAll() {
    const userGet = db.User.findAll()
    return userGet
  }

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
}
export default LoginService
