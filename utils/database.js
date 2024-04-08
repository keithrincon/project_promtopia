import mongoose from 'mongoose';

let isConnected = false; // Track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('Successfully connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};
