import db from "../../src/models"

class LoginService {
  static async register(
    name,
    surname,
    password,
    email,
    currency_level,
    basket,
    credit,
    roleId,
    isRemoved
  ) {
    try {
      return await db.User.create({
        name,
        surname,
        email,
        password,
        currency_level,
        basket,
        credit,
        roleId,
        isRemoved,
      })
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

  
}
export default LoginService
