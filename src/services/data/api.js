import { API_CONFIG } from '../config/apiConfig';

/**
 * Performs a fetch operation and checks for potential errors.
 * 
 * @async
 * @param {string} url - The URL to fetch data from.
 * @param {Object} [options={}] - Optional fetch configuration options.
 * @throws {Error} Throws an error if user is not found (status 404) or if there's no network response.
 * @returns {Promise<Object>} The parsed JSON data from the response.
 */
async function safeFetch(url, options = {}) {
  const response = await fetch(url, options);

  if (response.status === 404) {
    throw new Error('User not found');
  }

  if (!response) {
    throw new Error('Network response was not ok');
  }

  return await response.json();
}

/**
 * Fetches user data either from a mocked endpoint or a live endpoint based on the environment configuration.
 * 
 * @async
 * @param {Object} endpointConfig - Configuration for endpoints and data formatting.
 * @param {Function} endpointConfig.endpoint - Function that generates the live endpoint URL.
 * @param {Function} endpointConfig.mocked - Function that generates the mocked endpoint URL.
 * @param {Function} [endpointConfig.formatDataFunction] - Optional callback to format the data after fetching.
 * @param {number|string} userId - User identifier.
 * @returns {Promise<Object>} The fetched data, optionally formatted if a formatDataFunction is provided.
 */
export async function fetchUserData(endpointConfig, userId) {
  const endpoint =
    import.meta.env.VITE_DATA_MOCKED === 'true'
      ? endpointConfig.mocked(userId)
      : endpointConfig.endpoint(userId);

  const data = await safeFetch(endpoint);

  if (endpointConfig.formatDataFunction) {
    return endpointConfig.formatDataFunction(data);
  }

  return data;
}

/**
 * Fetches all data specified in the API_CONFIG object.
 * @async
 * @function
 * @returns {Promise<Object>} - The collected data from all endpoints in the API_CONFIG.
 * @throws {Error} This error should be handled by an Error Boundary component in React.
 *                 The Error Boundary is expected to display an appropriate error page.
 */

export async function fetchAllData(userId) {
  try {
    const data = {};

    for (const [key, value] of Object.entries(API_CONFIG)) {
      data[key] = await fetchUserData(value, userId);
    }

    return data;
  } catch (error) {
    console.error('Failed to fetch from the API: ', error);
    throw error;
  }
}
