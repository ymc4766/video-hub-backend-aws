import mongoose from "mongoose";
import colors from "colors";

export const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(
      colors.yellow.bold(`DB connected Successfully: ${conn.connection.host}`)
    );
  } catch (error) {
    console.log(`error connecting DB: ${error}`);
  }
};
