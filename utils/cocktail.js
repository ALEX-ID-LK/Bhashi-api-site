import axios from 'axios';

/**
 * Fetches a random cocktail from the CocktailDB API.
 * @returns {Promise<Object>} - The random cocktail details.
 */
export const fetchRandomCocktail = async () => {
  try {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');

    // Check if the response has data and is in the expected format
    if (response.data && response.data.drinks) {
      return {
        status: 'success',
        Author: 'Vishwa Mihiranga',
        data: response.data.drinks[0] // Extract the first (and only) cocktail from the response
      };
    } else {
      return {
        status: 'error',
        Author: 'Vishwa Mihiranga',
        message: 'Unexpected response format from CocktailDB API.'
      };
    }
  } catch (error) {
    return {
      status: 'error',
      Author: 'Vishwa Mihiranga',
      message: error.message || 'An error occurred while fetching a random cocktail from CocktailDB API.'
    };
  }
};
