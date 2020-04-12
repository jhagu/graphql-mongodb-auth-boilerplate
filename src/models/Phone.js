import { SchemaTypes, Schema } from 'mongoose';

const phoneSchema = new Schema({
  account_id: {
    type: SchemaTypes.ObjectId,
    required: true 
  },
  company: {
    type: SchemaTypes.String,
    enum: ['CLARO', 'MOVISTAR', 'TUENTI', 'PERSONAL']
  },
  area_code:{
    type: SchemaTypes.Number,
    required: true,
  },
  number:{
    type: SchemaTypes.Number,
    required: true
  }
});

const modelName = 'Phone';
const collectionName = 'phones';

const Phone = (connection) => connection.model(modelName, phoneSchema, collectionName);

export { Phone };