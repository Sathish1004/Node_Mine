import mongoose from "mongoose";



const connectDB = async()=>{

try{

    const data = await mongoose.connect(process.env.MONGO_URI)

    console.log(`Succfully DB conneceted ${data.connection.host}`);
    

}catch(error){
  console.log('Somethings error',error);
console.error(error);
process.exit(1)

       
}


}

export default connectDB;


// user_name :  sathishj0423_db_user
//  password :   IhSSd2C5As6olhMw


//mongodb+srv://sathishj0423_db_user:IhSSd2C5As6olhMw@cluster0.gihfonx.mongodb.net/sathish?appName=Cluster0