import "dotenv/config";

type Config = "mongodb.uri" | "mongodb.database" | "jwt.password";

const config = new Map<Config, any>();

config.set("mongodb.uri", process.env.MONGODB_URI);
config.set("mongodb.database", process.env.MONGODB_DATABASE);
config.set("jwt.password", process.env.JWT_TOKEN);

export default config;
