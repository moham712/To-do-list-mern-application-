const mongoose=require("mongoose");

const listSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            unique:true,
            required:true,
        },
        body:{
            type:String,
            dunique:true,
            required:true,
        },
        user:[
            { 
                type:mongoose.Types.ObjectId,
            ref:"User",
        }
        ],

           

    },
    {timestamps:true} // used tp return creat   createdAt ,updatedAt i.e the date of creation and date of updating 
)


module.exports=mongoose.model("List",listSchema);