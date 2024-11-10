import { MongoClient, ServerApiVersion } from "mongodb";
import config from "../config";

const MongoDB = new MongoClient(config.get("mongodb.uri"), {
  serverApi: ServerApiVersion.v1,
});

MongoDB.connect();

const connection = MongoDB.db(config.get("mongodb.database"));

export { connection };
