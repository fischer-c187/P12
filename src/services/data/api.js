import { API_CONFIG } from '../config/apiConfig';

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

export async function fetchAllData(userId) {
  try {
    const data = {};

    for (const [key, value] of Object.entries(API_CONFIG)) {
      data[key] = await fetchUserData(value, userId);
    }

    return data;
  } catch (error) {
    console.error('Failed to fetch from the API: ', error);
    return null;
  }
}
