const express=require("express")
const cors=require('cors')
const mongoose=require("mongoose")//model schema ,view frontend, controller backend,package-lock versions initialize
const dburl="mongodb://localhost:27017/sdpstocks"
const client=mongoose.connect(dburl).then(() => {
    console.log("connected to DB successfully")
}).catch((err) => {
    console.log(err.message)
});
const app=express()
app.use(cors())
const router=require("./routes")
app.use(express.json())//to pass JSON data
app.use("",router)



const port="2065"

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})