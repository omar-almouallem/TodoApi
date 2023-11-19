const DB_USERNAME = process.env.DB_USERNAME || "omar";
const DB_PASSWORD = process.env.DB_PASSWORD || "omar1234";
const DB_CLUSTER = process.env.DB_CLUSTER || "test.jyc6ghz.mongodb.net";
const DB_NAME = process.env.DB_NAME || "node-tuts";

export const DB_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}/${DB_NAME}?retryWrites=true&w=majority`;
