import mongoose from 'mongoose'

const db = process.env.MONGODB_URI

export default async function dbConnect () {
  try {
    if (!db) {
      throw new Error(
        'Please define the MONGODB_URI environment variable inside .env.local'
      )
    }

    await mongoose.connect(`${db}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error.message);
  }
}