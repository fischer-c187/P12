import { formatActivityData, formatAverageSessionsData, formatPerformanceData, formatUserInfosData } from '../data/format';

export const API_CONFIG = {
  user: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/`,
    mocked: (userId) => `/src/data/${userId}/user.json`,
    formatDataFunction: formatUserInfosData
  },
  activity: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/activity`,
    mocked: (userId) => `/src/data/${userId}/activity.json`,
    formatDataFunction: formatActivityData
  },
  averageSessions: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/average-sessions`,
    mocked: (userId) => `/src/data/${userId}/average-sessions.json`,
    formatDataFunction: formatAverageSessionsData
  },
  performance: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/performance`,
    mocked: (userId) => `/src/data/${userId}/performance.json`,
    formatDataFunction: formatPerformanceData
  }
};