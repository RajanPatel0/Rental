import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();

export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
//redis is : key value store(like giant json) use to store tokens
//for list , hashes, strings, sets 