import mongoose from 'mongoose';
const { connection } = mongoose;
// Conetct to the database
class DBHanlder {
  setUpConnection() {
    mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {useNewUrlParser: true});
    connection.once('open', () => console.log("Connect to the DB successfully!"));
  }
}

export default DBHanlder;