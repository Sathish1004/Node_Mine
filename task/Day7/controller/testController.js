import test from "../models/testModel.js"

export const teadata=async (req,res)=>{

    console.log(req.body);
    const {model,address,product,amount}=req.body
    const testtest= await test.create({model,address,product,amount})
    res.status(201).json({
        message:"data added successfully",
        data:testtest
    })

}

export const getdata=async (req,res)=>{
    try {
        const data=await test.find()
        res.status(201).json({message:"data get sucesfully",datas:data})
    } catch (error) {
        res.status(404).json({message:"file not found!!!"})
    }
}