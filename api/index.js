import config from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import userRoutes from "./server/account/routes/UserRoutes"
import adminRoutes from "./server/admin/index"
import privateRoutes from "./server/private/index"
import tokenControl from "./server/middleware/checkauth"

config.config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 8000

app.use("/user", userRoutes)
//app.use(tokenControl)
app.use("/admin", adminRoutes)
app.use("/private", privateRoutes)

// when a random route is inputed
app.get("*", (req, res) =>
  res.status(200).send({
    message: "Welcome to this API.",
  })
)

app.listen(port, () => console.log(`server is running on port ${port}`))

export default app
