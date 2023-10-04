import express from 'express'
import bodyParser from 'body-parser'
import { config } from 'dotenv'

// Init express
const app = express();

// Middleware
app.use(bodyParser.json());
config({ path: "./.env" })

// Routes
import catalogRoutes from './routes/catalogue.routes.js'

// Endpoints
app.use("/api/v1/catalog", catalogRoutes)

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))