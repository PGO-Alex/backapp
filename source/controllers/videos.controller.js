import {dbconn} from './../../dbconn/db.js'

export const getvideoslist = async (req,res)=>{
    try{
        const [result] = await dbconn.query('SELECT * FROM `like_vid_list`')
        console.log(result)
        res.json(result)
    } catch(error){
        return res.status(500).json({
            message:'Something went wrong'
        })
    }
}

export const getvideolistid = async (req,res)=>{
    try{
        const id = req.params.id
        const [result] = await dbconn.query('SELECT * FROM `like_vid_list` where `id_usr` =?',[id])
        if (result.length <= 0) return res.status(404).json({message: 'video not found'})
    console.log(result)
    res.json(result)
    } catch(error){
        return res.status(500).json({
            message:'Something went wrong'
        })
    }
}

export const postvideo = async (req, res)=>{
    try{
        const {video_title,video_url,video_details,id_usr} = req.body;
        const[result] = await dbconn.query('INSERT INTO `like_vid_list` (`video_title`, `video_url`, `video_details`, `id_usr`) VALUES (?,?,?,?)',[video_title,video_url,video_details,id_usr])
        console.log(result)
        res.send('Video agregado a favoritos')
    } catch(error){
        return res.status(500).json({
            message:'Something went wrong'
        })
    }
    
}

export const deletevideo = async (req, res)=>{
    try{

    } catch(error){
        return res.status(500).json({
            message:'Something went wrong'
        })
    }
    const {id_usr,id_video} = req.body
    const[result] = await dbconn.query('DELETE FROM `like_vid_list` WHERE `id_video` =? and `id_usr`=?',[id_video,id_usr])
    console.log(result)
    res.send('Video Eliminado de favoritos')
}