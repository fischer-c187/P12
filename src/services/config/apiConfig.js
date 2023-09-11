import { formatActivityData, formatAverageSessionsData, formatPerformanceData, formatUserInfosData } from '../data/format';
/**
 * Describes the configuration for fetching data. 
 * Provides paths for either mocked or backend data sources.
 * The `formatDataFunction` callback is utilized to transform 
 * raw data into a display-ready format.
 */
export const API_CONFIG = {
  user: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/`,
    mocked: (userId) => `/P12/data/${userId}/user.json`,
    formatDataFunction: formatUserInfosData
  },
  activity: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/activity`,
    mocked: (userId) => `/P12/data/${userId}/activity.json`,
    formatDataFunction: formatActivityData
  },
  averageSessions: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/average-sessions`,
    mocked: (userId) => `/P12/data/${userId}/average-sessions.json`,
    formatDataFunction: formatAverageSessionsData
  },
  performance: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/performance`,
    mocked: (userId) => `/P12/data/${userId}/performance.json`,
    formatDataFunction: formatPerformanceData
  }
};