import { MongoClient } from "mongodb";
import { MONGO_URI } from "../constants/index.js"

const mongoConnect = async () => {
  const client = new MongoClient(MONGO_URI);

  try {
      await client.connect();
      console.log("Connected to Database Successfully")
      return client.db()

  } catch (err) {
      console.log(err);
  }

}
export default mongoConnect