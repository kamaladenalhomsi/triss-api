import { Schema, model } from 'mongoose';
let roleSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId
  },
  name: {
    type: String,
    required: true
  },  
});
  
export default model('Role', roleSchema);