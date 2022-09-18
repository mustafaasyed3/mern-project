import express from 'express';
import "dotenv/config"
import cors from "cors";
import { connectDatabase } from './model/configuration.js';
import bodyParser from 'body-parser';
import { ProjectRoutes } from './controller/project.controller.js';


const app = express()
const PORT = process.env.PORT

app.use(cors(process.env.CORS_ORIGIN))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/api/project", ProjectRoutes)
connectDatabase()

app.listen(PORT, () => {
    console.log(`live on http://localhost:${PORT}`)
})



