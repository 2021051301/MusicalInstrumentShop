const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose
      .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, // Use this instead of useCreateIndex
      })
      .then((data)=>{
        console.log(`Mongodb Connect with Server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;