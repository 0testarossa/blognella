import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
  }));

// parse application/json
app.use(bodyParser.json())

const PORT: string | number = process.env.PORT || 4000

app.use(cors())
app.use(todoRoutes)

const uri: string = `mongodb://kiranella:czeczuga5@towerofbase-shard-00-00.psn5x.mongodb.net:27017,towerofbase-shard-00-01.psn5x.mongodb.net:27017,towerofbase-shard-00-02.psn5x.mongodb.net:27017/<dbname>?ssl=true&replicaSet=towerOfBase-shard-0&authSource=admin&retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })
