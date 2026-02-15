import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import details from './detatils.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
app.use(cors({origin : true}))
app.use(express.json())
app.use(express.urlencoded({'extended':true}))
mongoose.connect(process.env.dbconnect)
app.get('/',async (req,res)=>{
    res.send( await details.find())
}
)
app.post('/data' , (req,res)=>{
    details.create(req.body.details).then(result=>console.log('this is working')).catch(e=>console.log('not working'))
})

app.listen(5500,()=>{
    console.log('server is running')
})
