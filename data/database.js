import mongoose from "mongoose";
// Data base adding here

export const connectDB = ()=>{
    mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "backendapi",
  })
  .then(() => console.log("DataBase Added"))
  .catch((e) => console.log(e));
};