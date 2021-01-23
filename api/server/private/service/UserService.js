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

  static async gettRate(id){
    try {
      const rate = await db.Rate.findOne({where:{id: id}})
      console.log(rate);
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

  static async getRateUser(id) {
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

  static async getUserRate(id){
    try {
      const result = await db.Rate.findAll({
        include: [
          {
            model: db.User,
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

  static async buyRate(rate_id, user_id) {
    try {

      const rate = await db.Rate.findOne({ where: { id: rate_id }})
      const ratePrice = rate.price;

      const user = await db.User.findOne({where: {id: user_id}})
      const userCredit = user.credit

     var balanceResult =  userCredit - ratePrice

   
      const userRate = {
        user_id: user.id,
        rate_id : rate.id,
      }

      const userUpdateData = {
        name: user.name,
        surname: user.surname,
        password: user.password,
        currency_level : user.currency_level,
        basket : rate.id,
        credit: balanceResult,
        roleId: user.roleId,
        isRemoved: user.isRemoved
      }
      await db.UserRate.create(userRate) 
    const updateUserInfo =  await db.User.update(userUpdateData , {where:{id: user_id}})

      if (!updateUserInfo) {
        return {
          type: false,
          message: 'Satın Alma Hatası'
        }
      }
      return {
        type: true,
        message: 'Kurs Satın Alındı'
      }

      /*     const price = user.credit
      const ratePricee = user.Rates.map((i) => {
        var ratePrice = i.price
        return ratePrice
      })

      const rateLevel  = user.Rates.map((i)=>{
        let rate = i.id 
        return rate
      }) */

      /*   var balanceResult = price - ratePricee
      console.log(balanceResult);
      
      console.log('balance result : ' + balanceResult);
      console.log('price : ' + price);
      
      if (balanceResult > price) {
        balanceResult = ratePricee
      }
  


      const userInfo = await db.User.findOne({where: {id: user_id}})
      console.log(userInfo.surname);
      const userUpdateData = {
        name: userInfo.name,
        surname: userInfo.surname,
        password: userInfo.password,
        currency_level : userInfo.currency_level,
        basket : rateLevel[0],
        credit: balanceResult,
        roleId: userInfo.roleId,
        isRemoved: userInfo.isRemoved
       
      }

       await db.User.update(userUpdateData , {where:{id: user_id}})
      

       const userFinish = await db.User.findOne({
        where: { id: user_id },
        include: [
          {
            model: db.Rate,

            through: { attributes: [] },
          },
        ],
      }) */

      /* const user = await db.Rate.findAll({where:{id:user_id}}) */
     
    } catch (error) {
      throw error
    }
  }
}
export default LoginService
