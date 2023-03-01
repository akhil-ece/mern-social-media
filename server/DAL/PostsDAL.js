import MongoDAL from "./MongoDAL.js";
let collectionName = "posts";
export default class PostsDAL extends MongoDAL {
  
  constructor() {
    super(collectionName);
  }
}
