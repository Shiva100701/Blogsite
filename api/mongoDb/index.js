import mongoose from "mongoose"



const connectDb = async()=>{
try {
        const connectionInstance = await mongoose.connect(process.env.mongoose_uri)
        console.log(`\n MongoDb connected!! DB HOST: ${connectionInstance.connection.host}`);

} catch (error) {
    console.log("MongoDb connection error", error);
        process.exit(1)
}}

export default connectDb