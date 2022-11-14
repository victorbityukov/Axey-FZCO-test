import * as dotenv from 'dotenv';

export const setupDotEnv = () =>
  dotenv.config({
    path: !process.env.NODE_ENV ? '.env' : `.env.${process.env.NODE_ENV}`,
  });
