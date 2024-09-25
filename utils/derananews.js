import axios from 'axios';

/**
 * Fetches Dera News data from the API.
 * @returns {Promise<Object>} - The Dera News data.
 */
export const fetchDeraNews = async () => {
  try {
    const response = await axios.get('https://prabath-md-api.up.railway.app/api/derananews', {
      params: { apikey: '6467ad0b29' }
    });

    // Check if response has data and is in the expected format
    if (response.data && response.data.data) {
      return {
        status: 'success',
        data: response.data.data // Extract the Dera News data
      };
    } else {
      return {
        status: 'error',
        message: 'Unexpected response format from Dera News API.'
      };
    }
  } catch (error) {
    return {
      status: 'error',
      message: error.message || 'An error occurred while fetching Dera News data.'
    };
  }
};
