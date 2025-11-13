import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username:String,
  address:String
});

const User = mongoose.model("sathish",userSchema);
export default User;
