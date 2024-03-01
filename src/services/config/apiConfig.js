import {
  formatActivityData,
  formatAverageSessionsData,
  formatPerformanceData,
  formatUserInfosData,
} from "../data/format";

/**
 * Cleans the base URL by removing trailing slashes.
 * @param {string} baseUrl - The base URL.
 * @returns {string} The cleaned base URL.
 */
const cleanBaseUrl = (baseUrl) => {
  return baseUrl.replace(/\/$/, "");
};

/**
 * The base URL for the API.
 */
const baseUrl = cleanBaseUrl(import.meta.env.VITE_BASE_URL);

/**
 * Describes the configuration for fetching data.
 * Provides paths for either mocked or backend data sources.
 * The `formatDataFunction` callback is utilized to transform
 * raw data into a display-ready format.
 */
export const API_CONFIG = {
  user: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/`,
    mocked: (userId) => `${baseUrl}/data/${userId}/user.json`,
    formatDataFunction: formatUserInfosData,
  },
  activity: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/activity`,
    mocked: (userId) => `${baseUrl}/data/${userId}/activity.json`,
    formatDataFunction: formatActivityData,
  },
  averageSessions: {
    endpoint: (userId) =>
      `http://localhost:3000/user/${userId}/average-sessions`,
    mocked: (userId) => `${baseUrl}/data/${userId}/average-sessions.json`,
    formatDataFunction: formatAverageSessionsData,
  },
  performance: {
    endpoint: (userId) => `http://localhost:3000/user/${userId}/performance`,
    mocked: (userId) => `${baseUrl}/data/${userId}/performance.json`,
    formatDataFunction: formatPerformanceData,
  },
};
