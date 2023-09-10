import { API_CONFIG } from '../config/apiConfig';

async function safeFetch(url, options={}) {
  try {
    const response = await fetch(url, options);

    if(response.status === 404) {
      throw new Error('User not found');
    }

    if (!response) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to fetch from the API: ', error);
    return null;
  }
}

export async function fetchUserData(endpointConfig, userId) {
  const endpoint = endpointConfig.endpoint(userId);
  let data = await safeFetch(endpoint);

  if (!data) {
    console.info('Using mocked data due to API unavailability.');
    const mockedEndPoint = endpointConfig.mocked(userId);
    data = await safeFetch(mockedEndPoint);
  }

  return data;
}

export async function fetchAllData(userId) {
  const data = {};

  for(const [key, value] of Object.entries(API_CONFIG)){
    data[key] = await fetchUserData(value, userId);
  }

  return data;
}