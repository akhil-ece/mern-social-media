import MongoDAL from "./MongoDAL.js";
let collectionName = "users";
export default class UsersDAL extends MongoDAL {
  
  constructor() {
    super(collectionName);
  }
}
