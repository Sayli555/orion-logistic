const mongoose=require("mongoose")

module.exports=()=>{
    return mongoose.connect("mongodb+srv://sayligiri555:zpJTuYjn7cz1yLjA@cluster0.4umd0tx.mongodb.net/test_db?retryWrites=true&w=majority&appName=Cluster0")
}