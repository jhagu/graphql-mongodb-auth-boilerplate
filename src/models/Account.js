import { hash } from 'bcryptjs';
import { SchemaTypes, Schema } from 'mongoose';

// Schema definition

const accountSchema = new Schema ({
  name:{
    type: SchemaTypes.String,
    required: true
  },
  email: {
    type: SchemaTypes.String,
    required: true,
    unique: true
  },
  password: {
    type: SchemaTypes.String,
    required: true,
  },
  role:{
    type: SchemaTypes.String,
    required: true
  }
});

 accountSchema.pre('save', async function (next){
   const account = this;
   if(account.isModified('password')){
     try{
       account.password = await hash(account.password, 10);
     } catch (err){
       throw err;
     }
   }
   next();
 });

const modelName = 'Account';
const collectionName = 'accounts';

const Account = (connection) => connection.model(modelName, accountSchema, collectionName);

export { Account };
