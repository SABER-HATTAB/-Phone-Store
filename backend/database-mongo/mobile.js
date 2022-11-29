const mongoose = require("mongoose");
const Schema =  mongoose.Schema;
  const mobileSchema = new Schema({
    
        name:{
            type: String,
            required: true,
        },
        price:{
            type:Number,
            trim:true
        },
        processor: {
            type: String,
            trim: true,
    
        },
        ram: {
            type: String,
            trim: true,
        
        },
        screen: {
            type: String,
        },
       
        camera: {
            type: String,
        },
        operatingSystem: {
            type: String,
            trim: true,
    
        },
       
       image:{
            type:String,
            required: true,
        }
    },
    { timestamps: true }
);
const Mobile = mongoose.model("Mobile", mobileSchema);

module.exports = Mobile;




