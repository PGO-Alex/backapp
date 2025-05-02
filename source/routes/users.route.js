import {Router} from "express";
const urouter = Router()

import {getusers,getuserid, postuser, deleteuser, putuser} from '../controllers/users.controller.js'

urouter.get('/users', getusers)

urouter.get('/users/:id', getuserid)

urouter.put('/users/:id', putuser)

urouter.post('/users', postuser)

urouter.delete('/users/:id', deleteuser)

export default urouter