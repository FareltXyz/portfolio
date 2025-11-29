import { LRUCache } from "lru-cache";

export default function rateLimit({ uniqueTokenPerInterval, interval }) {
  const tokenCache = new LRUCache({
    max: uniqueTokenPerInterval || 500,
    ttl: interval || 60000,
  });

  return {
    check: (limit, token) =>
      new Promise((resolve, reject) => {
        const tokenCount = tokenCache.get(token) || [0];

        if (tokenCount[0] === 0) tokenCache.set(token, tokenCount);

        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;

        return isRateLimited ? reject(new Error("Rate limit exceeded")) : resolve();
      }),
  };
}
