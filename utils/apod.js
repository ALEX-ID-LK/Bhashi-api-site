

import axios from 'axios';

/**
 * Fetches NASA's Astronomy Picture of the Day (APOD) using NASA's API.
 * @param {string} apikey - The NASA API key.
 * @returns {Promise<Object>} - The APOD details.
 */
export const fetchAPOD = async (apikey) => {
  try {
    const response = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: { api_key: 'gb6uaMdxU269hknYpQKIcDr1PQnWeTBNhjoc0VWj' }
    });

    // Check if the response has data and is in the expected format
    if (response.data) {
      return {
        status: 'success',
        Author: 'Vishwa Mihiranga',
        data: response.data // Extract the APOD data
      };
    } else {
      return {
        status: 'error',
        Author: 'Vishwa Mihiranga',
        message: 'Unexpected response format from NASA API.'
      };
    }
  } catch (error) {
    return {
      status: 'error',
      Author: 'Vishwa Mihiranga',
      message: error.message || 'An error occurred while fetching APOD from NASA API.'
    };
  }
};
