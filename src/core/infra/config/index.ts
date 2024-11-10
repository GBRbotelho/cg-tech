import "dotenv/config";

type Config = "mongodb.uri" | "mongodb.database";

const config = new Map<Config, any>();

config.set("mongodb.uri", process.env.MONGODB_URI);
config.set("mongodb.database", process.env.MONGODB_DATABASE);

export default config;
