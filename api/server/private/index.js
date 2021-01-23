import express from "express"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import { encrypText } from "../../server/src/config/settings"
import Helpers from "../utils/helpers"
import privateRoutes from "../private/route/UserRoute"

const app = express()

app.use((req, res, next) => {
  const token = req.headers.authorization
  jwt.verify(token, encrypText, async (err, decoded) => {

    if (!decoded || err) {
      res.json({ type: false, message: "Your access is denied" })
    }
    

    const isRemoved = await Helpers.userIsRemoved(decoded.id)

    if (isRemoved === 1) {
      res.json({ type: false, message: "Your account is not active" })
    }
    req.decoded = decoded;

    next()
  })
  app.use(privateRoutes)
})



export default app
