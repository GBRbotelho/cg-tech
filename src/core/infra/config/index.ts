import "dotenv/config";

type Config =
  | "mongodb.uri"
  | "mongodb.database"
  | "jwt.password"
  | "notion-key";

const config = new Map<Config, any>();

config.set("mongodb.uri", process.env.MONGODB_URI);
config.set("mongodb.database", process.env.MONGODB_DATABASE);
config.set("jwt.password", process.env.JWT_TOKEN);
config.set("notion-key", process.env.NOTION_KEY);

export default config;
