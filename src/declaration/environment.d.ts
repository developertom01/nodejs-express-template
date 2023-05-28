namespace NodeJS {
  interface ProcessEnv {
    DATABASE_NAME: string;
    DATABASE_PORT: number;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    APP_NAME: string;
    APP_PORT: number;
    NODE_ENV: "dev" | "test" | "prod";
  }
}
