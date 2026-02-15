import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL!, { 

                                                 
  maxRetriesPerRequest: null, 
  enableReadyCheck: false, 
  reconnectOnError: () => true, 
retryStrategy(times) {
    return Math.min(times * 100, 2000);
  },
  tls: process.env.REDIS_URL?.startsWith("rediss://")
    ? {}
    : undefined,
}
                       );

redis
  .on("connect", () => console.log("✅ Connected to Redis"))
  .on("error", (err) => console.error("❌ Redis error:", err));

export default redis;
