// cachingMiddleware.js

const cache = {};

function cachingMiddleware(req, res, next) {
  const cacheKey = req.originalUrl || req.url;

  if (cache[cacheKey]) {
    const cachedResponse = cache[cacheKey];

    if (cachedResponse.expireAt > Date.now()) {
      return res.send(cachedResponse.data);
    } else {
      delete cache[cacheKey];
      console.log(`Cache for URL '${cacheKey}' has expired.`);
    }
  }

  res.sendResponse = res.send;
  res.send = (body) => {
    const expireAt = Date.now() + 60000; // Cache expiration time (1 minute)
    cache[cacheKey] = { data: body, expireAt };
    return res.sendResponse(body);
  };

  next();
}

module.exports = cachingMiddleware;
