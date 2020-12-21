import db from "../src/models/"

class Helpers {
  static async isHaveUser(email) {
    try {
      const user = await db.User.findOne({ where: { email } })
      if (!user) {
        return false
      }
      return true
    } catch (err) {
      throw err
    }
  }
}

export default Helpers
