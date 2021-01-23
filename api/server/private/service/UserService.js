import db from "../../src/models"

class LoginService {
  static async getAll() {
    const userGet = db.User.findAll()
    return userGet
  }

  static async getAllRate() {
    try {
      const rate = await db.Rate.findAll()
      return rate
    } catch (error) {
      throw error
    }
  }

  static async getRate(id) {
    try {
      const onlyRate = await db.Rate.findOne({ where: { id: id } })
      return onlyRate
    } catch (error) {
      throw error
    }
  }

  static async getUserRate(id) {
    try {
      const result = await db.User.findAll({
        include: [
          {
            model: db.Rate,
            where: { id },
            attributes: [],
          },
        ],
      })
      return result
    } catch (error) {
      throw error
    }
  }

  static async buyRate(user_id) {
    try {
      const user = await db.User.findOne({ 
        where: { id: 8 },
        include:[
          { 
            model: db.Rate,
            
            through: {attributes: []},
          }

          
        ]
      })
  console.log(user.credit);
  
      
      /* const user = await db.Rate.findAll({where:{id:user_id}}) */
      return user
    } catch (error) {
      throw error
    }
  }
}
export default LoginService
