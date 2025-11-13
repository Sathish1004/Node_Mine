import mongoose from 'mongoose'

const testSchema=new mongoose.Schema(
    {
    model:String,
    address:String,
    product:String,
    amount:Number
})

const test= mongoose.model("newdb",testSchema)
export default test;