import {Router} from "express";
const vidrouter = Router()

import {deletevideo,getvideolistid,getvideoslist,postvideo} from '../controllers/videos.controller.js'

vidrouter.get('/listvideos', getvideoslist)

vidrouter.get('/listvideos/:id', getvideolistid)

vidrouter.post('/listvideos', postvideo)

vidrouter.delete('/listvideos', deletevideo)

export default vidrouter