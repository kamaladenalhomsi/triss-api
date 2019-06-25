import { Schema, model } from 'mongoose';
let userSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  }, 
  avatar: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: Schema.Types.ObjectId, 
    ref: 'Role' 
  }
});

export default model('User', userSchema);