import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();


const connectionString = "mongodb://localhost:27017";//process.env.MONGO_URL;

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection = null;

async function connectToServer() {
  var clientConnection = await client.connect();
  dbConnection = clientConnection.db('test');
}

async function getDb() {
  if(dbConnection) {
    return dbConnection;
  } else {
    await connectToServer();
    return dbConnection;
  }
}

export { getDb, connectToServer };
