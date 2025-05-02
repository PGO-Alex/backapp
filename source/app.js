import express from 'express'
import urouter from './routes/users.route.js'
import vidrouter from './routes/videos.routes.js'
import approuter from './routes/app.routes.js'
import './config.js'
import { PORT } from './config.js'

const app = express()
app.use(express.json())

//routes
app.use(approuter)
app.use('/api',vidrouter)
app.use('/api',urouter)

app.use((req,res,next)=>{
    res.status(404).json({
        message:'No data found in this route ?'[req.baseUrl]
    })
})

app.listen(PORT)
console.log("server running on: " + "http://localhost:"+PORT)