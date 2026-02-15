import mongoose from "mongoose";
const Schema = new mongoose.Schema(
    {
        "name" : String,
        'description' : String,
        'age' : Number
    }
)
const details = mongoose.model('details' , Schema)
export default details