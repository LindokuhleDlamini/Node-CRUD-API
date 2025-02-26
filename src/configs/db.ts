import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export async function connectDB () {
  try {
    if (process.env.MONGO_URI) {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log('MongoDB Connected...');
    }
    console.log('MongoDB Failed to Connect...');
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

