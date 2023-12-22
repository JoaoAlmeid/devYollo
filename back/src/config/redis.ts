export const connection = process.env.REDIS_URI || "";
export const limiterMax = process.env.REDIS_OPT_LIMITER_MAX || 1;
export const limiterDuration = process.env.REDIS_OPT_LIMITER_DURATION || 3000;