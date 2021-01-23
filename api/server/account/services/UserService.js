import db from "../../src/models"
import rate from "../../src/models/rate"
import user from "../../src/models/user"

class LoginService {
  static async register(body,password,rate_id) {
    try {


      const rate = await db.Rate.findOne({where: {id: rate_id}})
      
      const ratePrice = rate.price
      const userBody  = {
        name:body.name,
        surname:body.surname,
        email : body.email,
        password : password,
        currency_level: body.currency_level,
        basket : rate.id,
        credit : 2500 - ratePrice,
        roleId : "0",
        isRemoved : 0
      }
      const userRateBody = {
        rate_id : rate_id
      }
      
     const createUser = await db.User.create(userBody)
      userRateBody['user_id'] =  createUser.id;
      await db.UserRate.create(userRateBody)
      return createUser;

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
