import axios from 'axios';

/**
 * Fetches Sporty News data from the API.
 * @returns {Promise<Object>} - The Sporty News data.
 */
export const fetchSportyNews = async () => {
  try {
    const response = await axios.get('https://prabath-md-api.up.railway.app/api/sportynews', {
      params: { apikey: '6467ad0b29' }
    });

    // Check if response has data and is in the expected format
    if (response.data && response.data.data) {
      return {
        status: 'success',
        data: response.data.data // Extract the Sporty News data
      };
    } else {
      return {
        status: 'error',
        message: 'Unexpected response format from Sporty News API.'
      };
    }
  } catch (error) {
    return {
      status: 'error',
      message: error.message || 'An error occurred while fetching Sporty News data.'
    };
  }
};