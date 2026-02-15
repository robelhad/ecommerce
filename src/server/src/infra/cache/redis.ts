import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_URL!, { 
  tls: {}, 
                                                 
  maxRetriesPerRequest: null, 
  enableReadyCheck: false, 
  reconnectOnError: () => true, }
                       );

redis
  .on("connect", () => console.log("✅ Connected to Redis"))
  .on("error", (err) => console.error("❌ Redis error:", err));

export default redis;
