export const API_CONFIG = {
  user: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/`,
    mocked: (userId) => `/src/data/${userId}/user.json`
  },
  activity: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/activity`,
    mocked: (userId) => `/src/data/${userId}/activity.json`
  },
  averageSessions: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/average-sessions`,
    mocked: (userId) => `/src/data/${userId}/average-sessions.json`
  },
  performance: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/performance`,
    mocked: (userId) => `/src/data/${userId}/performance.json`
  }
};