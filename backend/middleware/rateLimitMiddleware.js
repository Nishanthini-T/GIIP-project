const requestMap = new Map();

const basicRateLimiter = (limit = 100, windowMs = 15 * 60 * 1000) => (req, res, next) => {
  const ip = req.ip || req.connection.remoteAddress || "unknown";
  const currentTime = Date.now();
  const currentData = requestMap.get(ip);

  if (!currentData || currentTime > currentData.expiresAt) {
    requestMap.set(ip, {
      count: 1,
      expiresAt: currentTime + windowMs
    });
    return next();
  }

  if (currentData.count >= limit) {
    return res.status(429).json({
      message: "Too many requests. Please try again later."
    });
  }

  currentData.count += 1;
  requestMap.set(ip, currentData);
  next();
};

module.exports = {
  basicRateLimiter
};
