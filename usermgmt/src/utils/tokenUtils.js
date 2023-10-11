// utils/tokenUtils.js
const invalidTokens = new Set();

// Middleware to check token validity
export const checkTokenValidity = (token) => {
  return !invalidTokens.has(token);
};

// When a user logs out or you want to invalidate a token:
export const invalidateToken = (token) => {
  invalidTokens.add(token);
};

