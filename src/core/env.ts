export const APP_PORT = process.env.APP_PORT;
export const NODE_ENV = process.env.NODE_ENV;
export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_PORT = process.env.DATABASE_PORT;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_NAME = process.env.DATABASE_NAME;

export const IsDebugMode = NODE_ENV !== "dev";
export const MONGOOSE_CONNECTION_URI = `mongodb://database:${DATABASE_PORT}/${DATABASE_NAME}`;
