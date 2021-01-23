import db from "../../src/models"

class LoginService {

  static async getAll() {
    const userGet = db.User.findAll()
    return userGet
  }

  static async getAllRate(){
    try {
      const rate = await db.Rate.findAll();
      return rate;
    } catch (error) {
      throw error
    }
  }
  
  static async getRate(id){
    try {
      const onlyRate = await db.Rate.findOne({where: {id: id}})
      return onlyRate;
    } catch (error) {
      throw error
    }
  }
}
export default LoginService
