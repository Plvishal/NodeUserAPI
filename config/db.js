import mongoose from 'mongoose';
const ConectDB = async () => {
  const conn = await mongoose.connect(process.env.mongodb_url);
  if (conn) {
    console.log('Connected with database');
  }
};

export default ConectDB;
