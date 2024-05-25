const mongoose = require("mongoose");
const dbConnect = async() =>{
    try {    
        await mongoose.connect("mongodb+srv://himanshu32428:Ih8ZfwFCLLVC94T9@cluster0.n6caph3.mongodb.net/devArcade");
        console.log("Database Connected");
    } catch (error) {
        console.log(`Error in Data Base :-> ${error}`);
    }
}
module.exports = dbConnect;