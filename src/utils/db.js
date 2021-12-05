import mongoose from 'mongoose';

const dbConnect = () => {
  mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.p1gpn.azure.mongodb.net/book_store_db`);
  let connection = mongoose.connection;

  connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

  // Check to see if connection is established or not
  connection.once("open", function() {
    console.log("Connection Successful!");
  });
}

export default dbConnect;