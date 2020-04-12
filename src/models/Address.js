import { SchemaTypes, Schema } from 'mongoose';

const addressSchema = new Schema({
  account_id: {
    type: SchemaTypes.ObjectId,
    required: true 
  },
  country: {
    type: SchemaTypes.String
  },
  province:{
    type: SchemaTypes.String,
  },
  city:{
    type: SchemaTypes.String,
  },
  street:{
    type: SchemaTypes.String,
  },
  numeration:{
    type: SchemaTypes.Number
  },
  postal_code:{
    type: SchemaTypes.Number
  }
});

const modelName = 'Address';
const collectionName = 'addresses';

const Address = (connection) => connection.model(modelName, addressSchema, collectionName);

export { Address }