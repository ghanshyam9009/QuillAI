const mongoose = require("mongoose");
//PASS: '"mongodb+srv://twentekghana:I0XU4wUzi9rZCBil@masync-mern-ai.24hgrcc.mongodb.net/masync-mern-ai?retryWrites=true&w=majority"'
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      // "mongodb://localhost:27017/masync-mern-ai"
      "mongodb+srv://ghanshyamchoudhary9009:4DK4UKGFKQqHr60v@cluster0.e7gr7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log(`Mongodb connected ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
