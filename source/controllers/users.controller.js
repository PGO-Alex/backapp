import {dbconn} from './../../dbconn/db.js'

//Get a complet list of users
export const getusers = async (req,res)=>{
    try{
        const [result] = await dbconn.query('SELECT * FROM `users`')
        console.log(result)
        res.json(result)
    } catch(error){
        return res.status(500).json({
            message:'Something went wrong'
        })
    }
}

//Get user by ID user
export const getuserid = async (req,res)=>{
    try{
        const id = req.params.id
        const [result] = await dbconn.query('SELECT * FROM `users` where `id_usr` =?',[id])
        if (result.length <= 0) return res.status(404).json({message: 'user not found'})
        console.log(result)
        res.json(result)
    } catch(error){
        return res.status(500).json({
            message:'Something went wrong'
        })
    }
}

//update user info based on their ID
export const putuser = async (req, res)=>{
    try{
        const{name,lastname,email,password,details}= req.body
        const {id} = req.params
        const[result] = await dbconn.query('update `users` set `usr_name`=?,`usr_lastname`=?,`usr_email`=?,`usr_password`=?,`usr_details`=? where `id_usr` =?',[name,lastname,email,password,details,id])
        console.log(result)
        res.send('user updated!')
    } catch(error){
        return res.status(500).json({
            message:'Something went wrong'
        })
    }
}

export const postuser = async (req, res)=>{
    try{
        const {name, lastname,email,password,details} = req.body
        const[result] = await dbconn.query('INSERT INTO `users` (`usr_name`, `usr_lastname`, `usr_email`, `usr_password`, `usr_details`) VALUES (?, ?, ?, ?, ?)',[name,lastname,email,password,details])
        console.log(result)
        res.send('Usuario Agregado')
    } catch(error){
        return res.status(500).json({
            message:'Something went wrong'
        })
    }
}

export const deleteuser = async (req, res)=>{
    try{
        const id = req.params.id
        const[result] = await dbconn.query('DELETE FROM `users` WHERE `id_usr` =?',[id])
        if (result.affectedRows <=0) return res.status(404).json({message:'Usuario no encontrado'})
        console.log(result)
        res.send('Usuario eliminado')
    } catch(error){
        return res.status(500).json({
            message:'Something went wrong'
        })
    }
}