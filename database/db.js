import mongoose from 'mongoose';
import { buildDBUri } from '../src/utils';

const config = {
  protocol: process.env.DB_PROTOCOL,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME
};

const uri = buildDBUri(config);

let connection = null;

export const getConnection = async () => {
  if(connection === null){
    connection = await mongoose.createConnection(uri, {
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0, // and MongoDB driver buffering
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
  }
  return connection;
}
