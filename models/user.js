import { Schema, model } from 'mongoose';
let userSchema = new Schema({
  id: String,
  name: String,
  phone: String,
  password: String 
});

export default model('User', userSchema);