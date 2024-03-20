const mongoose = require('mongoose')
mongoose.set('strictQuery',true)

const atlat ="mongodb+srv://cuongtvpd08492:7jhQz25sD1T4VQxv@cluster0.syltqfe.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0"
const connect = async()=>{
    try {
        await mongoose.connect(atlat,{
          
        })
        console.log("Connect success");
    } catch (error) {
        console.log("Connect fail");
        console.log(error);
        
    }
}
module.exports ={connect};