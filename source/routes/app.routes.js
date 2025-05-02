import {Router} from "express";
const approuter = Router()
import {def} from '../controllers/app.controller.js'

approuter.get('/',def)
approuter.get('/api',def)
approuter.get('/users',def)
approuter.get('/videos',def)
approuter.get('/listvideos',def)

export default approuter